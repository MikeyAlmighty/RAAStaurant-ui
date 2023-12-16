# RAAStaurant-ui

Component Library for **RAAStaurant**

## Designs
[Figma](https://www.figma.com/file/3nXsOf18664v9qqbuf8zit/RAAStaurant?type=design&node-id=0%3A1&mode=design&t=aqhp6Qqkm05EQbC1-1)

## Release (CI/CD)

### This project follows [SemVer](https://semver.org/) versioning

We make use of:

- [Semantic Release](https://www.npmjs.com/package/semantic-release)

| Type                                           | Outcome        | Example                                                                                            | Version |
|------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------|---------|
| `feat: xxx` incl `"BREAKING CHANGE"` in footer | **Major Bump** | `git commit -m "feat: updated Button component" -m "BREAKING CHANGE: Redesigned Button Component"` | `^.X.X` |
| `feat: xxx`                                    | **Minor Bump** | `git commit -m "feat: added Button Component"`                                                     | `X.^.X` |
| `fix: xxx`                                     | **Patch Bump** | `git commit -m "fix: fixed Button Component"`                                                      | `X.X.^` |
