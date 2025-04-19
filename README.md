# Mod Downloads Badge
A README badge using [shields.io](https://github.com/badges/shields/) showing the total number of downloads for your mod/addon across various platforms

## Usage
Add the following to your README.md file:
```markdown
![Mod Downloads](https://img.shields.io/endpoint?url=https://runkit.io/kna27/mod-downloads/branches/master?<parameters>)
```
e.x.
```markdown
![Mod Downloads](https://img.shields.io/endpoint?url=https://runkit.io/kna27/mod-downloads/branches/master?github=kna27/ksp-data-export&spacedock=2711&curseforge=475559&format=comma)
```
![Mod Downloads](https://img.shields.io/endpoint?url=https://mod-downloads-38jhfft8pdyq.runkit.sh/?github=kna27/ksp-data-export&spacedock=2711&curseforge=475559&format=comma)
### Parameters
All supported platforms below are added as query parameters to the URL. The `format` parameter can be left blank for the raw number, `comma` to include commas, and `metric` to include a suffix (K, M, B, etc.) for large numbers.

## Supported Platforms
| Platform | Usage | Example | Info |
| --- | --- | --- | --- |
| GitHub | github=\<username>/\<repo> | github=kna27/ksp-data-export | Adds total downloads from all GitHub releases |
| CurseForge | curseforge=\<id> | curseforge=475559 | ID is "Project ID" from the "About Project" section on the CurseForge mod page |
| Spacedock | spacedock=\<id> | spacedock=2711 | ID is the number in the mod page's URL |


To request another platform, open an issue or pull request.