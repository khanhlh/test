// src/context/state.js
import { createContext, useContext } from 'react';
import { useState } from 'react';
// import { OptionsStore } from './store';
import { types, applySnapshot, flow, onSnapshot } from 'mobx-state-tree'
import { getScreen } from './screen';

const AppContext = createContext();

const OptionsStore = types
  .model({
    darkmode: true,
    sidebar: false,
    type: '',
    isItem: false,
    screen: ''
  }).actions((self) => ({
    toggle(name) {
        self[name] = !self[name]
    },
    set(name, val) {
        self[name] = val
    },
    setType(type) {
        self.type = type
    },
    showItem(isItem) {
        self.isItem = isItem
    },

    updateScreenSize(width) {
        self.screen = getScreen(width)
    }
  }))


  let store
  export function initializeStore() {
    const _store = store ?? OptionsStore.create()
  
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
  
    const snapshot = JSON.parse(localStorage.getItem('test-store') || '{}')
    if (snapshot) {
      snapshot.inited = false
      applySnapshot(_store, snapshot)
    }
    
    // reset sidebar
    _store.set('sidebar', false)

    onSnapshot(_store, snapshot => {
      localStorage.setItem('test-store', JSON.stringify(snapshot))
    })

    // Create the store once in the client
    if (!store) store = _store
    if (typeof window !== 'undefined') window.store = store
    return store
  }

export function AppWrapper({ children }) {
  const sharedState = initializeStore()

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useStore() {
  return useContext(AppContext);
}