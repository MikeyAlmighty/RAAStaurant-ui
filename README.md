# RAAStaurant-ui

Component Library for **RAAStaurant**

## Release (CI/CD)

- This project follows [SemVer](https://semver.org/) versioning
  We use of [Semantic Release](https://www.npmjs.com/package/semantic-release)

| Type                                           | Outcome        | Example                                                                                            | Version |
|------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------|---------|
| `feat: xxx` incl `"BREAKING CHANGE"` in footer | **Major Bump** | `git commit -m "feat: updated Button component" -m "BREAKING CHANGE: Redesigned Button Component"` | `^.X.X` |
| `feat: xxx`                                    | **Minor Bump** | `git commit -m "feat: added Button Component"`                                                     | `X.^.X` |
| `fix: xxx`                                     | **Patch Bump** | `git commit -m "fix: fixed Button Component"`                                                      | `X.X.^` |
