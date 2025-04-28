# Mod Downloads Badge

A [Shields.io](https://github.com/badges/shields/) endpoint badge that shows the total number of downloads for your mod/addon across various platforms.

## Usage

Add the following to your README.md file:

```markdown
![Mod Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fmod-download-count-badge.vercel.app%3F<parameters>)
```

e.x.

```markdown
![Mod Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fmod-download-count-badge.vercel.app%3Fgithub%3Dkna27%2Fksp-data-export%26spacedock%3D2711%26curseforge%3D475559%26format%3Dcomma)
```

![Mod Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fmod-download-count-badge.vercel.app%3Fgithub%3Dkna27%2Fksp-data-export%26spacedock%3D2711%26curseforge%3D475559%26format%3Dcomma)

> [!TIP]
> Use the [generator](https://kna27.github.io/mod-download-count-badge/generator.html) to easily generate the URL for you.

## Parameters

### Supported Platforms

All supported platforms below can be added as query parameters.
| Platform | Usage | Example | Info |
| --- | --- | --- | --- |
| GitHub | github=\<username>/\<repo> | github=kna27/ksp-data-export | Adds total downloads from all GitHub releases |
| CurseForge | curseforge=\<id> | curseforge=475559 | ID is "Project ID" from the "About Project" section on the CurseForge mod page. **Requires** `CURSEFORGE_API_KEY` **environment variable** |
| Spacedock | spacedock=\<id> | spacedock=2711 | ID is the number in the mod page's URL |

### Format

This changes the format of the number of downloads, the default is raw (no formatting).
| Format | Usage | Example |
| --- | --- | --- |
| Raw | format=raw | 12345 |
| Comma | format=comma | 12,345 |
| Metric | format=metric | 12.3K |

> [!IMPORTANT]
> Make sure to URL encode the URL and parameters.

To request another platform, open an issue or pull request.
