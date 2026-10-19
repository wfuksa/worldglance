# Worldglance Agent Instructions

Worldglance is an iterative product project.

Before substantial work, read:

- README.md
- docs/PRODUCT.md
- docs/DESIGN.md
- docs/ARCHITECTURE.md
- docs/ROADMAP.md

Read docs/CAS.md only when CAS context is relevant.

## Primary rule

Prioritize building and improving the actual Worldglance product.

Avoid unnecessary process, abstractions and infrastructure.

## Development rules

1. Work only on the currently requested milestone or task.

2. Do not implement future roadmap features unless explicitly requested.

3. Keep the application runnable after meaningful changes.

4. Prefer the simplest implementation that is technically sound.

5. Do not add infrastructure because it may hypothetically be useful later.

6. Do not introduce databases, services, queues, workers, authentication systems or similar infrastructure without a current requirement.

7. Do not create elaborate abstraction layers before the underlying technology has been proven.

8. For visual or interaction work, prefer working prototypes and iteration over theoretical planning.

9. Maintain strong TypeScript correctness and reasonable code quality.

10. Add tests for meaningful behavior and important failure cases, but do not create excessive testing bureaucracy.

11. Maintain good performance, particularly for rendering and animation.

12. Simulate detailed activity primarily where it is visible or relevant.

13. Keep observed, modelled, synthetic and static information conceptually distinct.

14. Do not fabricate live data.

15. Ask for a decision when an important product choice is genuinely ambiguous.

16. Small implementation details may be decided independently when they are reversible and consistent with the project documents.

17. Do not create release-proof systems, publication envelopes or custom systems whose purpose is merely to verify that GitHub worked.

18. Normal GitHub development is sufficient:
    branch -> PR -> CI -> squash merge -> main.

19. Keep documentation concise and update it only when the product or architecture meaningfully changes.

20. CAS documentation is secondary. Do not add CAS-related code or product features unless explicitly requested.

## Working style

For a development task:

1. understand the requested outcome
2. inspect the relevant current code
3. make a small plan
4. implement
5. run appropriate checks
6. show/report the result
7. identify any real remaining issue

Do not turn a small task into a large project-management exercise.

## Product priority

A development session should normally result in one of these:

- visible product improvement
- necessary technical capability
- meaningful bug fix
- meaningful performance improvement
- necessary test/reliability improvement

If proposed work produces none of these, reconsider whether it is needed.