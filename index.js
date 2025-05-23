require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
    let downloads = 0;
    if (req.query.github) {
        downloads += await tryGet(github, req.query.github);
    }
    if (req.query.curseforge) {
        downloads += await tryGet(curseforge, req.query.curseforge);
    }
    if (req.query.spacedock) {
        downloads += await tryGet(spacedock, req.query.spacedock);
    }

    res.json({
        schemaVersion: 1,
        label: "Downloads",
        message: format(downloads, req.query.format),
        color: "green",
    });
});

function format(downloads, format) {
    if (format === "comma") {
        return downloads.toLocaleString();
    } else if (format === "metric") {
        const suffixes = ["", "K", "M", "B"];
        let suffixIndex = 0;
        while (downloads >= 1000) {
            downloads /= 1000;
            suffixIndex++;
        }
        return `${downloads.toFixed(2)}${suffixes[suffixIndex]}`;
    } else {
        return downloads.toString();
    }
}

async function tryGet(source, key) {
    try {
        return await source(key);
    } catch (error) {
        console.error(`Error in tryGet ${source}(${key}): ${error}`);
        return 0;
    }
}

async function github(repo) {
    const apiUrl = `https://api.github.com/repos/${repo}/releases`;
    const headers = {
        "User-Agent": "request",
    };
    try {
        const response = await axios.get(apiUrl, { headers });
        if (response.status === 200) {
            let totalDownloads = 0;
            for (const release of response.data) {
                for (const asset of release.assets) {
                    totalDownloads += asset.download_count || 0;
                }
            }
            return totalDownloads;
        }
    } catch (error) {
        console.error(`GitHub API error: ${error}`);
    }
    return 0;
}

async function curseforge(id) {
    if (parseInt(id) != id) {
        return 0;
    }
    const apiUrl = `https://api.curseforge.com/v1/mods/${id}`;
    const headers = {
        Accept: "application/json",
        "x-api-key": process.env.CURSEFORGE_API_KEY,
    };
    try {
        const response = await axios.get(apiUrl, { headers });
        return response.data.data.downloadCount || 0;
    } catch (error) {
        console.error(`CurseForge API error: ${error}`);
    }
    return 0;
}

async function spacedock(id) {
    if (parseInt(id) != id) {
        return 0;
    }
    const apiUrl = `https://spacedock.info/api/mod/${id}`;
    const headers = {
        Accept: "application/json",
    };
    try {
        const response = await axios.get(apiUrl, { headers });
        if (response.status === 200) {
            return response.data.downloads || 0;
        }
    } catch (error) {
        console.error(`SpaceDock API error: ${error}`);
    }
    return 0;
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
