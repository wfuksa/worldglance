# Worldglance Product

## Core idea

Worldglance is an interactive stylized simulation of Earth.

A user opens Worldglance and sees the planet as a living system rather than a static map.

The user can rotate the Earth, zoom into regions and cities and observe activity around the world.

The experience should combine:

- exploration
- visual information
- simulation
- relaxation
- constant subtle activity

Worldglance is not intended to look like satellite imagery.

It should have its own clean, recognizable visual identity.

## Core experience

The main experience is the Earth itself.

A user should be able to:

- rotate the planet naturally
- zoom smoothly from global scale toward cities
- move around without confusing camera behavior
- discover locations
- observe animated activity
- inspect selected objects or events
- understand what they are looking at without a cluttered interface

The world should feel alive even when the user is not actively searching for something.

## Living-world systems

Potential core systems include:

### Geography

- Earth
- land
- oceans
- countries
- cities
- roads
- buildings
- major geographic features

### Movement

- road traffic
- aircraft
- ships
- other movement where useful

Movement does not always need to represent every real individual object.

Worldglance may simulate activity from real-world signals or statistical information when appropriate.

### Environment

- clouds
- weather systems
- precipitation
- storms
- day/night
- other environmental effects where useful

### Events

Examples may include:

- earthquakes
- major storms
- wildfires
- notable transport activity
- selected major world events

The product should avoid becoming a noisy breaking-news dashboard.

Events should complement the Earth experience rather than dominate it.

## Data truth

Worldglance may contain different kinds of information.

Where relevant, the system should distinguish between:

- observed — directly based on real data
- modelled — calculated or estimated from real data
- synthetic — simulated for the Worldglance experience
- static — reference information that does not represent a live observation

Worldglance must not present synthetic or estimated information as if it were exact live reality.

This does not require large warnings everywhere. The distinction should be understandable in the product when it matters.

## Performance philosophy

Worldglance should not attempt to simulate every detail of Earth continuously.

Detailed activity should primarily exist where the user can currently see it or is likely to see it soon.

Examples:

- do not animate detailed traffic on the opposite side of Earth
- increase detail as the camera approaches an area
- reduce or stop expensive simulation outside the visible scene
- reuse objects where practical
- load detail progressively
- cancel unnecessary work when the user moves somewhere else

Smooth interaction is more important than unnecessary background fidelity.

## Website 1.0 direction

Website 1.0 should establish the complete core Worldglance experience.

Likely areas include:

- polished interactive 3D Earth
- strong visual identity
- smooth navigation
- geographic detail
- city representation
- roads and buildings
- selected animated world activity
- aircraft and ships
- weather/environment
- selected events
- basic place search/navigation
- object/event information
- responsive UI
- good performance
- stable public website

The exact implementation sequence is defined by the roadmap and may change as prototypes teach us what works.

## Not a priority at the beginning

These should not distract early development:

- user accounts
- subscriptions
- payments
- social networking
- large backend systems
- native mobile apps
- AI simulations
- historical time travel
- advanced screensaver modes
- music integrations
- extensive personalization

Some may become useful later.

## Product principle

The central question for every feature is:

Does this make exploring the living Earth more interesting, beautiful or understandable?

If not, it probably does not belong in the core product.