# Butter (Unity 2D)

Butter is a cozy 2D mobile game built in Unity where the player runs out of butter and completes mini-games to restock it. The target platform is iOS (App Store).

---

## Project Goals

- Simple interactions (mobile friendly)
- Soft, pastel, relaxing aesthetic
- Clear scene flow: Title -> Avatar Select -> Story -> Mini-game -> Return

---

## Tech Stack

- **Engine:** Unity (2D)
- **Language:** C#
- **Target:** iOS
- **Version Control:** Git + GitHub

---

## Getting Started

### Prerequisites
- Unity Hub installed
- Unity Editor installed (2D template)
- Xcode (for iOS builds)

---

## Scenes and Flow

Planned scene order (MVP):
1. Credits (possibly)
2. Title
3. AvatarSelect
4. Story
5. Field (mini-game: milking)

Unity Build Settings should include scenes in this order:
- Title
- AvatarSelect
(others added as they are created)

---

## Current Status

Phase: Setup + First Playable Flow

Completed:
- Unity project + repo structure
- Unity-safe .gitignore
- Starter scripts for scene flow (Title → AvatarSelect)
- Base scenes created and added to build settings

Next:
- Title UI (text + Play button)
- Avatar select UI and persistent selection
- Field mini-game prototype (milking)

---

## Scripts (Starter)

These scripts are intended to be minimal scaffolding and will evolve.

Suggested location:
- Assets/Scripts/

### GameBootstrap.cs
- Optional boot logic (can be expanded into a loading/splash system)

### TitleController.cs
- Handles Play button → loads AvatarSelect

---

## How to Build for iOS (High Level)

1. File → Build Settings
2. Select **iOS** → Switch Platform
3. Confirm scenes are added
4. Build to a folder (Unity generates an Xcode project)
5. Open in Xcode
6. Set signing + bundle identifier
7. Run on device

---

## Roadmap

### MVP (First Playable)
- Title screen UI + Play
- Avatar selection UI
- Basic story beat: “out of butter”
- Field scene + milking mini-game prototype
- Simple “return to store” state

### Post-MVP
- More mini-games (collect ingredients, churn, package)
- Visual polish (animations, particles)
- Sound + music
- Save system
- Store upgrades/progression
- Loading transitions

---

## Notes

- Keep the MVP tiny and playable as fast as possible.
- Avoid overbuilding systems before the first full scene loop works.
- Focus on: scene flow, input, feedback, and one satisfying mini-game.

---
