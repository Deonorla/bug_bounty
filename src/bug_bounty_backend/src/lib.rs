use candid::{CandidType, Deserialize, Principal};

use serde::Serialize;
use ic_cdk::{ post_upgrade, pre_upgrade, query, update, init, storage,};
use std::cell::RefCell;
use std::collections::{BTreeMap, BTreeSet};

mod models;
use crate::{models::*};

use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{DefaultMemoryImpl, StableBTreeMap};
use crate::models::{BountyAccount, UserProfile};

type IdStore = BTreeMap<String, Principal>;
type ProfileStore = BTreeMap<Principal, UserProfile>;
type TournamentStore = BTreeMap<String, BountyAccount>;

thread_local! {
    static PROFILE_STORE: RefCell<ProfileStore> = RefCell::default();
    static BOUNTY_STORE: RefCell<TournamentStore> = RefCell::default();
    static ID_STORE: RefCell<IdStore> = RefCell::default();
}

#[query(name = "getSelf")]
fn get_self(principal:Principal) -> UserProfile {
    // let id = ic_cdk::api::caller();
    PROFILE_STORE.with(|profile_store| {
        profile_store
            .borrow()
            .get(&principal)
            .cloned().unwrap_or_default()
    })
}

#[query]
fn get_all_user() -> Vec<UserProfile> {
    PROFILE_STORE.with(|profile_store| {
        let mut all_users = Vec::new();
        profile_store.borrow().iter().for_each(|user| {
            all_users.push((*user.1).clone().try_into().unwrap_or_default())
        });
        all_users
    })
}

#[query]
fn get_profile(name: String) -> UserProfile {
    ID_STORE.with(|id_store| {
        PROFILE_STORE.with(|profile_store| {
            id_store
                .borrow()
                .get(&name)
                .and_then(|id| profile_store.borrow().get(id).cloned()).unwrap_or_default()
        })
    })
}

#[update]
fn create_profile(profile: UserProfile,principal:Principal) -> Result<u8,u8> {
    // let principal_id = ic_cdk::api::caller();
    ID_STORE.with(|id_store| {
        id_store
            .borrow_mut()
            .insert(profile.username.clone(), principal);
    });
    PROFILE_STORE.with(|profile_store| {
        profile_store.borrow_mut().insert(principal, profile);
    });
    Ok(1)
}

#[query]
fn get_bounty(id: String) -> BountyAccount {
    BOUNTY_STORE.with(|bounty_store| {
        bounty_store.borrow().get(&id).cloned().unwrap_or_default()
    })
}

#[query]
fn get_all_bounty() -> Vec<BountyAccount> {
    BOUNTY_STORE.with(|bounty_store| {
        let mut all_bounty = Vec::new();
        bounty_store.borrow().iter().for_each(|bounty| {
            all_bounty.push((*bounty.1).clone().try_into().unwrap_or_default())
        });
        all_bounty
    })
}

#[update]
fn create_bounty(bounty: BountyAccount) ->  Result<u8,u8>{
    let id_hash = bounty.clone().id_hash;

    BOUNTY_STORE.with(|bounty_store| {
        bounty_store.borrow_mut().insert(id_hash, bounty);
    });
    Ok(1)
}

#[update]
fn start_bounty(id: String) {
    BOUNTY_STORE.with(|bounty_store| {
        let mut bounty = bounty_store.borrow().get(&id).cloned().unwrap_or_default();
        bounty.status = match bounty.status {
            BountyStatus::AcceptingHunters => BountyStatus::BountyHuntingInProgress,
            _ => {
                BountyStatus::BountyHuntingInProgress
            }
        };
        bounty_store.borrow_mut().insert(id, bounty);
    });
}

#[update]
fn end_bounty(id: String, names:Vec<String>,principal:Principal) {
    if get_self(principal).is_mod {
        BOUNTY_STORE.with(|bounty_store| {
            let mut bounty = bounty_store.borrow().get(&id).cloned().unwrap_or_default();
            bounty.status = match bounty.status {
                BountyStatus::AcceptingHunters => BountyStatus::BountyHuntingInProgress,
                _ => {
                    BountyStatus::BountyHuntingInProgress
                }
            };

            names.iter().for_each(|name| {
                bounty.winers.push(name.try_into().unwrap());
            });
            bounty_store.borrow_mut().insert(id, bounty);
        });
    }
    else {
        println!("you're not admin");
    }
}

#[update]
fn join_bounty(name: String,id: String) {
    BOUNTY_STORE.with(|bounty_store| {
        let mut bounty = bounty_store.borrow().get(&id).cloned().unwrap_or_default();
        bounty.user.push(name);
        bounty_store.borrow_mut().insert(id, bounty);
    });
}

#[update]
fn set_mod(name: String, identity: Principal) {
    ID_STORE.with(|id_store| {
        PROFILE_STORE.with(|profile_store| {
            let mut user = id_store
                .borrow()
                .get(&name)
                .and_then(|id| profile_store.borrow().get(id).cloned()).unwrap_or_default();
            user.is_mod = true;
            profile_store.borrow_mut().insert(identity, user);
        })
    });
}

#[query]
fn is_mod(name: String) -> bool {
    ID_STORE.with(|id_store| {
        PROFILE_STORE.with(|profile_store| {
            let mut user = id_store
                .borrow()
                .get(&name)
                .and_then(|id| profile_store.borrow().get(id).cloned()).unwrap_or_default();
            user.is_mod
        })
    })
}


// // Retrieves the value associated with the given key if it exists.
// #[ic_cdk_macros::query]
// fn get_stable_profile(key: Principal) -> Option<UserProfile> {
//     MAP.with(|p| p.borrow().get(&key))
// }
//
// // Inserts an entry into the map and returns the previous value of the key if it exists.
// #[ic_cdk_macros::update]
// fn insert_stable_profile(key: Principal, value: UserProfile) -> Option<UserProfile> {
//     MAP.with(|p| p.borrow_mut().insert(key, value))
// }
//
// // Retrieves the value associated with the given key if it exists.
// #[ic_cdk_macros::query]
// fn get_stable_bounty(key: String) -> Option<BountyAccount> {
//     BOUNTY_MAP.with(|p| p.borrow().get(&key))
// }
//
// // Inserts an entry into the map and returns the previous value of the key if it exists.
// #[ic_cdk_macros::update]
// fn insert_stable_bounty(key: String, value: BountyAccount) -> Option<BountyAccount> {
//     BOUNTY_MAP.with(|p| p.borrow_mut().insert(key, value))
// }

#[pre_upgrade]
fn pre_upgrade() {
    PROFILE_STORE.with(|users| storage::stable_save((users,)).unwrap());
    BOUNTY_STORE.with(|bountys| storage::stable_save((bountys,)).unwrap());
}

#[post_upgrade]
fn post_upgrade() {
    let (old_users,): ( ProfileStore,) = storage::stable_restore().unwrap();
    PROFILE_STORE.with(|users| *users.borrow_mut() = old_users);
    let (old_bountys,): ( TournamentStore,) = storage::stable_restore().expect("");
    BOUNTY_STORE.with(|bountys| *bountys.borrow_mut() = old_bountys);
}


// Enable Candid export
ic_cdk::export_candid!();
