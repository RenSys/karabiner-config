// src/index.ts
import {
  layer,
  map,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
} from 'karabiner.ts';

/**
 * Write rules into the “Default” Karabiner‑Elements profile.
 * Run `pnpm run build` to compile this file and reload Karabiner.
 */
writeToProfile('Default profile', [
  /* --- Symbol‑mode layer (hold “/”) --- */
  layer('/', 'symbol-mode').manipulators([
    //     / + [ 1    2    3    4    5 ] => ⌘⌥⌃⇧⇪ pasted
    withMapper(['⌘', '⌥', '⌃', '⇧', '⇪'])((k, i) =>
      map((i + 1) as NumberKeyValue).toPaste(k),
    ),
    //     / + [ ← → ↑ ↓ ␣ ⏎ ⇥ ⎋ ⌫ ⌦ ⇪ ] => symbol pasted
    withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⇥', '⎋', '⌫', '⌦', '⇪'])((k) =>
      map(k).toPaste(k),
    ),
  ]),

  /* --- Caps Lock → Hyper layer --- */
  rule('Caps→Hyper').manipulators([
    map('caps_lock')          // ⇪ held = Hyper
      .toHyper()              // ⌘⌥⌃⇧
      .toIfAlone('caps_lock') // tap = Caps Lock
  ])
]);