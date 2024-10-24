class Start {
    static main(args) {
        const mainArgs = Start.concat(
            ["--version", "mcp", "--accessToken", "0", "--assetsDir", "assets", "--assetIndex", "1.21.1", "--userProperties", "{}"],
            args
        );
        Main.main(mainArgs);  // Assumes Main class is available globally.
    }

    static concat(first, second) {
        return first.concat(second);
    }
}

// Simulate the main function call with necessary arguments.
const args = []; // Add your arguments here if needed.
Start.main(args);
