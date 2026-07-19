# Boo Button

A desktop app with one job: a big red button in the middle of a white screen. Press it, and it boos you.

Built with [Electron](https://www.electronjs.org/). Also available as a [mobile app](https://github.com/mmmckay1/BooButton).

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

Boo Button collects no data of any kind. See [PRIVACY.md](PRIVACY.md).

## Security

Found a security issue? Please open an issue on this repo describing it. This is a small hobby project with no network access or data handling, so the attack surface is minimal, but reports are still welcome.

## License

[MIT](LICENSE)
