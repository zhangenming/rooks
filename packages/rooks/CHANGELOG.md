# rooks

## 8.4.0

### Minor Changes

- [`6dc62d2`](https://github.com/imbhargav5/rooks/commit/6dc62d28a801e135cf4ee5468947599f087be41d) Thanks [@imbhargav5](https://github.com/imbhargav5)! - - [926f423e](https://github.com/imbhargav5/rooks/commit/926f423e): Added new React hooks to `data/hooks-list.json`.

  - [a3e09c57](https://github.com/imbhargav5/rooks/commit/a3e09c57): Fixed type aliasing in package build output using `tsc-alias` (`packages/rooks`).
  - [a8eed151](https://github.com/imbhargav5/rooks/commit/a8eed151): Updated import paths in documentation for regular hooks to use relative paths.
  - [ed4924f9](https://github.com/imbhargav5/rooks/commit/ed4924f9): Refactored imports in `index.ts` to use relative paths for hooks.
  - [638d9d89](https://github.com/imbhargav5/rooks/commit/638d9d89): Added `useSuspenseNavigatorBattery` export and fixed JSON formatting.
  - [71c96694](https://github.com/imbhargav5/rooks/commit/71c96694): Removed deprecated `react-hook-yolo` documentation file.
  - [46f33a87](https://github.com/imbhargav5/rooks/commit/46f33a87): Organized hooks in sidebar by category; updated multiple hook documentation files and metadata for improved structure.
  - [179aa4fc](https://github.com/imbhargav5/rooks/commit/179aa4fc): Updated `useGetIsMounted` docs with comprehensive examples and use cases.
  - [ed5321b8](https://github.com/imbhargav5/rooks/commit/ed5321b8): Updated `useArrayState` docs with comprehensive examples and detailed API reference.
  - [425c6bb1](https://github.com/imbhargav5/rooks/commit/425c6bb1): Updated `useAsyncEffect` docs with comprehensive examples and detailed explanations.
  - [f1963051](https://github.com/imbhargav5/rooks/commit/f1963051): General `README.md` update.

  **Areas affected:**

  - `data/hooks-list.json`
  - `packages/rooks` (build, package.json, index.ts, experimental.ts, tests)
  - `apps/website/content/docs/hooks/` (many .mdx and meta.json files)
  - `README.md`
  - Scripts and documentation files

## 8.3.1

### Patch Changes

- [`0ee8537`](https://github.com/imbhargav5/rooks/commit/0ee8537ea43addb1b98d1fcdbc8c69790316d078) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Fix docs links

## 8.3.0

### Minor Changes

- [#1841](https://github.com/imbhargav5/rooks/pull/1841) [`a70de17`](https://github.com/imbhargav5/rooks/commit/a70de1748201a9067d85acad29c251c992fcf1ff) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Enhance useAudio hook, add unit tests, and update documentation

  - **useAudio Enhancement**: Significantly enhanced the useAudio hook with improved functionality and comprehensive documentation (679 additions, 80 deletions across hook implementation, tests, and docs)
  - **Unit Tests**: Add unit tests for useBoundingclientrectRef, useFullscreen, useIntersectionObserverRef, useIsomorphicEffect, and useMutationObserverRef hooks
  - **Documentation**: Update README image source to use raw GitHub URL for better accessibility

  This minor release includes major improvements to the useAudio hook with new features, expanded test coverage for multiple hooks, and enhanced documentation accessibility.

### Patch Changes

- [#1841](https://github.com/imbhargav5/rooks/pull/1841) [`a70de17`](https://github.com/imbhargav5/rooks/commit/a70de1748201a9067d85acad29c251c992fcf1ff) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Add unit tests for several hooks and update README image source

  - Add unit tests for useBoundingclientrectRef, useFullscreen, useIntersectionObserverRef, useIsomorphicEffect, and useMutationObserverRef hooks
  - Update README image source to use raw GitHub URL for better accessibility

  This patch includes improvements to test coverage and documentation accessibility.

## 8.2.0

### Minor Changes

- [#1835](https://github.com/imbhargav5/rooks/pull/1835) [`825e69a`](https://github.com/imbhargav5/rooks/commit/825e69a1148e181b7d8fbd9a7c23069fbb11d64e) Thanks [@imbhargav5](https://github.com/imbhargav5)! - ## New Features and Improvements

  ### New Hooks

  - Add experimental `useSuspenseNavigatorUserAgentData` hook for enhanced user agent detection capabilities

  ### Bug Fixes and Enhancements

  - Fix `useWebLocksApi` hook to prevent combining its internal `signal` with the `ifAvailable` parameter, improving API reliability
  - Refactor `useWindowSize` hook for improved clarity and performance with additional tests
  - Enhance `useAudio` hook documentation for better clarity and examples

  ### Documentation Improvements

  - Update README image source to local path for better reliability
  - Refactor hooks list with improved categorization and markdown structure
  - Comprehensive documentation updates for multiple hooks including:
    - `useUndoRedoState` with API details and examples
    - `useSetState` with comprehensive examples and details
    - `useRenderCount` with use cases and examples
    - `useOnClickRef` with detailed explanations
    - `useDeepCompareEffect` with usage guide
    - `useOnHoverRef` with comprehensive examples
    - `useWhyDidYouUpdate` with detailed documentation
    - `useSafeSetState` with detailed explanations
    - `useSessionstorageState` with comprehensive examples
    - `useDebounceFn` with detailed explanations
  - Fix markdown code formatting in hook documentation tables
  - Add `lucide-react` dependency and update icon handling

  ### Developer Experience

  - Improved code formatting and structure across multiple hook documentations
  - Enhanced examples and use cases for better developer understanding
  - Better categorization and organization of hooks documentation

## 8.1.1

### Patch Changes

- [`477133e`](https://github.com/imbhargav5/rooks/commit/477133e0adc74640c5b843a1659871bbff74448d) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Rewrite useNavigatorLanguage and useDocumentVisibilityState to useSyncExternalStore

## 8.1.0

### Minor Changes

- [`be8409a`](https://github.com/imbhargav5/rooks/commit/be8409a9745a4b6f0a8b83820d651b92dfd1b23c) Thanks [@imbhargav5](https://github.com/imbhargav5)! - new hooks added

## 8.0.1

### Patch Changes

- [`f97e3f9`](https://github.com/imbhargav5/rooks/commit/f97e3f9e7e514944d2780334eef4933ec3238899) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Remove lock on package versions

## 8.0.0

### Major Changes

- [#1774](https://github.com/imbhargav5/rooks/pull/1774) [`3714495`](https://github.com/imbhargav5/rooks/commit/37144959801a8c71ca9757b01656190c1ffe1218) Thanks [@imbhargav5](https://github.com/imbhargav5)! - upgrade to react 19

## 7.14.1

### Patch Changes

- [`22f820ca`](https://github.com/imbhargav5/rooks/commit/22f820ca07692107adbf70b7c3b26be9a91c80fc) Thanks [@imbhargav5](https://github.com/imbhargav5)! - fix setState logic for undoredostate

## 7.14.0

### Minor Changes

- [`27a29e4a`](https://github.com/imbhargav5/rooks/commit/27a29e4ab46d6caff16ecf3e370e6b88e8b056f0) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add useWhyDidYouUpdate hook

## 7.13.0

### Minor Changes

- [`5b90f1b1`](https://github.com/imbhargav5/rooks/commit/5b90f1b1e9871bd4cf7c50820bbdfa24d7814edd) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useUndoRedoState: add isUndoPossible, isRedoPossible booleans to controls

## 7.12.0

### Minor Changes

- [`b2262dce`](https://github.com/imbhargav5/rooks/commit/b2262dce87040e345322740cdcd9ff59b0eea69e) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Add clear controls for useUndoRedoState

## 7.11.3

### Patch Changes

- [`fe501fde`](https://github.com/imbhargav5/rooks/commit/fe501fde6940a80f132c9770cdb212b358c6e8f3) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Use ReadonlyMap for useNativeMapState

## 7.11.2

### Patch Changes

- [#1714](https://github.com/imbhargav5/rooks/pull/1714) [`19129f40`](https://github.com/imbhargav5/rooks/commit/19129f40ac1b0ee4c676bedb91eb3599e719c4f3) Thanks [@nathggns](https://github.com/nathggns)! - useLocalstorageState: ensure stable identity for set/remove functions

## 7.11.1

### Patch Changes

- [`2fe9046c`](https://github.com/imbhargav5/rooks/commit/2fe9046c6183c7f8b1938124dc63ef8b859c3e7e) Thanks [@imbhargav5](https://github.com/imbhargav5)! - fix noop import

## 7.11.0

### Minor Changes

- [`498f4f40`](https://github.com/imbhargav5/rooks/commit/498f4f406eca708f6251d8913639fecc08623d4c) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Add useDocumentTitle hook

## 7.10.1

### Patch Changes

- [`6fd5f336`](https://github.com/imbhargav5/rooks/commit/6fd5f3364aed83f18e612902c8e061acc4cb40d7) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useInViewRef supports no callback, no options overloads

## 7.10.0

### Minor Changes

- [`c3c8f761`](https://github.com/imbhargav5/rooks/commit/c3c8f76171c88df81df58acb5a4905d7a646c14d) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add useUndoRedoState hook

## 7.9.0

### Minor Changes

- [`81e24680`](https://github.com/imbhargav5/rooks/commit/81e24680f1623bbf80fe46ca814b5fb116ba0004) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add useSpeech, usePromise and useDebounceFn hooks

## 7.8.5

### Patch Changes

- [#1673](https://github.com/imbhargav5/rooks/pull/1673) [`7c834152`](https://github.com/imbhargav5/rooks/commit/7c8341523c626374778b667f0bd61c54904f9af4) Thanks [@nghiepdev](https://github.com/nghiepdev)! - useLocalstorageState bug fix "undefined"

## 7.8.4

### Patch Changes

- [`420e5e93`](https://github.com/imbhargav5/rooks/commit/420e5e93047a04a9a342797da93d00cdf7644f23) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useIsDroppingFiles bug fix

## 7.8.3

### Patch Changes

- [`6b36874b`](https://github.com/imbhargav5/rooks/commit/6b36874bfa9b97e999e3821c536f13161e00f868) Thanks [@imbhargav5](https://github.com/imbhargav5)! - noop import fix

## 7.8.2

### Patch Changes

- [`9c82b066`](https://github.com/imbhargav5/rooks/commit/9c82b0665d894806e53b296a17435a6fa3547486) Thanks [@imbhargav5](https://github.com/imbhargav5)! - shim use syncsternal store while using with useOnline

## 7.8.1

### Patch Changes

- [`f791599e`](https://github.com/imbhargav5/rooks/commit/f791599efb3d86bf69d761269ed733f112bfcce5) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useToggle boolean toggle function overload bug fix

## 7.8.0

### Minor Changes

- [`656e58e7`](https://github.com/imbhargav5/rooks/commit/656e58e72825330e7102ac793cd243696834864f) Thanks [@imbhargav5](https://github.com/imbhargav5)! - added useMapObjectState, useSafeSetState, useDeepCompareEffect

## 7.7.0

### Minor Changes

- [`27469ff1`](https://github.com/imbhargav5/rooks/commit/27469ff15c51da8b86b0181e3b035ec74e70a6cd) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add useLockBodyScroll hook

### Patch Changes

- [`f2096713`](https://github.com/imbhargav5/rooks/commit/f2096713dd0d14a3420102b17b0557cacd481dbb) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useOnline now uses useSyncExternalStore

## 7.6.1

### Patch Changes

- [`ddab30d4`](https://github.com/imbhargav5/rooks/commit/ddab30d476ffc162c7ec281d5cba718e7f6613b4) Thanks [@imbhargav5](https://github.com/imbhargav5)! - localstorage set will accept a function argument

## 7.6.0

### Minor Changes

- [#1583](https://github.com/imbhargav5/rooks/pull/1583) [`ac0086dd`](https://github.com/imbhargav5/rooks/commit/ac0086dd09b879f7aa4ab811551df061940933c5) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add useAudio, useVideo, useOnLongHover, useOnLongPress, useFreshCallback, useFileDropRef, useOrientation, useVibrate, useMouseMoveDelta, useMouseWheelDelta, useIsDroppingFiles hooks

## 7.5.0

### Minor Changes

- [`7773cf47`](https://github.com/imbhargav5/rooks/commit/7773cf47a6d624f4129db5d0113cdf0c5863d8ff) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useArrayState initializer can be a function returning an array

## 7.4.4

### Patch Changes

- [#1576](https://github.com/imbhargav5/rooks/pull/1576) [`33b09d7a`](https://github.com/imbhargav5/rooks/commit/33b09d7a1b7b95d10637de1eda94b503d30315d6) Thanks [@imbhargav5](https://github.com/imbhargav5)! - useDebounce bug fixes. It will now work as intended with inline functions. Stale closure bug fixed

## 7.4.3

### Patch Changes

- [#1568](https://github.com/imbhargav5/rooks/pull/1568) [`03f7c711`](https://github.com/imbhargav5/rooks/commit/03f7c71118e00e2a92099c0635d21630d5bf00d2) Thanks [@hooriza](https://github.com/hooriza)! - Reduce the frequency of `useIntersectionObserver` callback execution

## 7.4.2

### Patch Changes

- [`780c00fb`](https://github.com/imbhargav5/rooks/commit/780c00fb47a7b0a36a3041815697291ec8e462ef) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Update website link

## 7.4.1

### Patch Changes

- [#1556](https://github.com/imbhargav5/rooks/pull/1556) [`2511d61e`](https://github.com/imbhargav5/rooks/commit/2511d61e5943e32ccbe7804132115c8e62fc2ea0) Thanks [@reflog](https://github.com/reflog)! - fix(useMediaMatch): safari 13.1 addListener fix

## 7.4.0

### Minor Changes

- [`85395a0c`](https://github.com/imbhargav5/rooks/commit/85395a0ceb992d32f420c4dd84b6937ba1a092ce) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add insertItemAtIndex and sort controls to useArrayState

## 7.3.0

### Minor Changes

- [`f2ee3a66`](https://github.com/imbhargav5/rooks/commit/f2ee3a66be7eda8c217a080574275d97f37cbea5) Thanks [@imbhargav5](https://github.com/imbhargav5)! - add splice, removeItemAtIndex and replaceItemAtIndex controls for useArrayState

## 7.2.1

### Patch Changes

- [`e9e03e42`](https://github.com/imbhargav5/rooks/commit/e9e03e42d231f8b122738b59cdea117f7acdb3df) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Add setArray method to array controls

## 7.2.0

### Minor Changes

- [`41796346`](https://github.com/imbhargav5/rooks/commit/41796346759c275ef08cfea6c5fe3af44e1a8e38) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Add updateItemAtIndex control for useArrayState hook

## 7.1.2

### Patch Changes

- [#1408](https://github.com/imbhargav5/rooks/pull/1408) [`fec6932b`](https://github.com/imbhargav5/rooks/commit/fec6932bb0e5120ab448ed7b3318db7e16289b12) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Restore support for es2017 in dist files

- [`2ff6c4fc`](https://github.com/imbhargav5/rooks/commit/2ff6c4fc28739cd82b952b16c287d741fc44c937) Thanks [@imbhargav5](https://github.com/imbhargav5)! - update type signature for anyFunction

## 7.1.2-alpha.1

### Patch Changes

- [`2ff6c4fc`](https://github.com/imbhargav5/rooks/commit/2ff6c4fc28739cd82b952b16c287d741fc44c937) Thanks [@aso1datov](https://github.com/aso1datov)! - update type signature for anyFunction

## 7.1.2-alpha.0

### Patch Changes

- [#1408](https://github.com/imbhargav5/rooks/pull/1408) [`fec6932b`](https://github.com/imbhargav5/rooks/commit/fec6932bb0e5120ab448ed7b3318db7e16289b12) Thanks [@imbhargav5](https://github.com/imbhargav5)! - Restore support for es2017 in dist files

## 7.1.1

### Patch Changes

- bea1ddaf: fix isNumber import in usetimeTravelState

## 7.1.0

### Minor Changes

- 0dc2004e: New hook! useTimeTravelState hook added which can undo and redo a state variable seamlessly.

## 7.0.0

### Major Changes

- ae9a465a: useFullscreen hook rewrite

### Patch Changes

- b2003b87: bundle size decrease
- 886a6721: Make useKey target option support undefined

## 7.0.0-alpha.2

### Patch Changes

- 886a6721: Make useKey target option support undefined

## 7.0.0-alpha.1

### Patch Changes

- b2003b87: bundle size decrease

## 6.4.3

### Patch Changes

- 140fceab: fix dependency checking in useAsyncEffect

## 7.0.0-alpha.0

### Major Changes

- 9ca2be66: useFullscreen hook rewrite

## 6.4.2

### Patch Changes

- 47e847ae: bugfix: window (or document) is not defined when using ssr

## 6.4.1

### Patch Changes

- 19b280fa: decrease bundle size

## 6.4.0

### Minor Changes

- 182e8498: add useArrayState and useSetState hooks to manage arrays and sets

## 6.3.0

### Minor Changes

- 2eac1e11: add useFocus & useFocusWithin hooks

## 6.2.1

### Patch Changes

- e3866ce5: useKeys comes with a new preventLostKeyup option for native events
- 7aea2fea: Add an opt-in option to prevent useKeys from losing track of keyup.

## 6.2.0

### Minor Changes

- 11d5b33a: add useResizeObserverRef hook

## 6.1.0

### Minor Changes

- 33f6630d: add useAsyncEffect and useRenderCount hooks

## 6.0.1

### Major Changes

- 8b98cf06: useLocalstorage, useSessionstorage, useTimeout, useInterval, usePrevious, useVisibilitySensor, useUpdateEffect hooks removed. Please use useLocalstorageState, useSessionstorageState, useTimeoutWhen, useIntervalWhen, usePreviousImmediate, useInViewRef and useDidUpdate

## 6.0.0-alpha.0

### Major Changes

- a9d4e0af: useLocalstorage, useSessionstorage, useTimeout, useInterval, usePrevious, useVisibilitySensor, useUpdateEffect hooks removed. Please use useLocalstorageState, useSessionstorageState, useTimeoutWhen, useIntervalWhen, usePreviousImmediate, useInViewRef and useDidUpdate
