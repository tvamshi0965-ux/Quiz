import React from 'react'
import ReactDOM from 'react-dom/client'
import './responsive.css'
import App from '../app.jsx'

// ── window.storage polyfill (browser localStorage) ──────────────────────────
// The App uses window.storage.get/set/delete/list (Kiro IDE storage API).
// This shim maps those calls to localStorage so the app runs in any browser.

const PREFIX_SHARED = '__edutech_shared__';
const PREFIX_LOCAL  = '__edutech_local__';

window.storage = {
  get(key, shared = false) {
    const k = (shared ? PREFIX_SHARED : PREFIX_LOCAL) + key;
    const raw = localStorage.getItem(k);
    if (raw === null) return Promise.resolve(null);
    return Promise.resolve({ value: raw });
  },

  set(key, value, shared = false) {
    const k = (shared ? PREFIX_SHARED : PREFIX_LOCAL) + key;
    localStorage.setItem(k, value);
    return Promise.resolve();
  },

  delete(key, shared = false) {
    const k = (shared ? PREFIX_SHARED : PREFIX_LOCAL) + key;
    localStorage.removeItem(k);
    return Promise.resolve();
  },

  // list all keys that start with the given prefix (shared store only)
  list(prefix, shared = false) {
    const storePrefix = (shared ? PREFIX_SHARED : PREFIX_LOCAL) + prefix;
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const raw = localStorage.key(i);
      if (raw && raw.startsWith(storePrefix)) {
        // strip the store prefix so callers receive just the logical key
        keys.push(raw.slice(shared ? PREFIX_SHARED.length : PREFIX_LOCAL.length));
      }
    }
    return Promise.resolve({ keys });
  },
};
// ────────────────────────────────────────────────────────────────────────────

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
