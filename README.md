# SteelModel Lite

A free and open-source lightweight steel modeling tool aimed at providing basic 3D steel profile modeling, visualization, and simple BOM export, with future plans for parametric connections, IFC support, and fabrication outputs.

## Features (MVP)

* 3D viewer using WebGL (Three.js)
* Parametric steel profiles (I, H, C, L) – simplified or procedural
* Editable lengths and quantities
* Simple BOM export (CSV)
* Entirely browser-based, no installation required

## Planned Features

* Real cross‑section geometry and extrusions
* Bolt and hole modeling
* DXF export for shop drawings
* DSTV/NC export
* IFC import/export using IfcOpenShell
* Rule-based steel connections
* Clash detection

## Getting Started

### Run locally

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

### Structure

```
/README.md
/LICENSE
/index.html
/.github/ISSUE_TEMPLATE/bug_report.md
/.github/ISSUE_TEMPLATE/feature_request.md
```

## Contributing

Contributions are welcome! Please:

* Open issues using the provided templates
* Create pull requests with clear commit messages
* Keep changes modular and documented

## License

MIT License. See `LICENSE` file.

## Author

Open-source community — maintained by structural engineers & developers.
