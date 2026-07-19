# Boo Button

A desktop app.  You press it, it boos.  Use it to live our your best hater lifestyle.

Built with [Electron](https://www.electronjs.org/).

## Download

Grab the latest Windows installer from the [Releases page](https://github.com/mmmckay1/BooButtonDesktop/releases/latest).

A Microsoft Store listing is in progress.

## Running from source

```
npm install
npm start
```

## Building the installer

```
npm run dist
```

Produces a Windows installer in `release/`. See [package.json](package.json) for the `electron-builder` targets (Windows, macOS, Linux); macOS/Linux builds must be run on their respective platforms.

## Privacy

Boo Button collects no data of any kind. What would a button even need data for?  See [PRIVACY.md](PRIVACY.md).

## Security

Found a security issue? Please open an issue on this repo describing it. This is a small hobby project with no network access or data handling, so the attack surface is minimal, but reports are still welcome.

## License

[MIT](LICENSE)
