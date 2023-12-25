# RCCIIT Art Club Website

This is a Node.js package that allows you to create and manage a website for the RCCIIT Art Club. You can use this package to showcase your artworks, events, and members. You can also customize the look and feel of your website with different themes and layouts.

![Screenshot of the website](https://github.com/Soumya-Chakraborty/RCCIIT_Art_Club/blob/main/app/ANIME%20ART%20CONTEST%20POSTER.png?raw=true)

## Setting up the development environment

Ensure your system has Node.js and npm installed by downloading them from [here](https://nodejs.org/). Then, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Soumya-Chakraborty/RCCIIT_Art_Club.git
```

2. Navigate to the project folder and install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to access the web app.

## Usage

To use this package, you need to create a configuration file that contains the information about your art club, such as the name, description, logo, artworks, events, and members. You can use the sample file provided in the package as a template.

Then, run the following command in your terminal:

```bash
npx rcciit-art-club-website config.json
```

This will generate a folder called `public` that contains the files for your website. You can then upload this folder to your hosting service or use a local server to view your website.

You can also use the following options to customize your website:

- `--theme`: Choose a theme for your website from the available options. The default theme is `light`.
- `--layout`: Choose a layout for your website from the available options. The default layout is `grid`.
- `--title`: Set a custom title for your website. The default title is the name of your art club.

For example, to create a website with a dark theme, a list layout, and a custom title, run the following command:

```bash
npx rcciit-art-club-website config.json --theme dark --layout list --title "RCCIIT Art Club - The Best Art Club Ever"
```

## Contributing

We welcome any contributions to this project. You can report issues, request features, or submit pull requests on our [GitHub repository](^2^).

Please read our [contribution guidelines](Contribution.md) before making any changes.

## Support

If you need any help or have any questions about this project, you can contact us at rcciitartclub@gmail.com. You can also follow us on [Facebook](^3^) and [Instagram](^4^) for the latest updates.

For more information on our support policy, please read our [support document](Support.md).

## Citation

If you use this project in your research or publications, please cite it as follows:

```bibtex
@misc{rcciitartclub2023,
  author = {Chakraborty, Soumya and others},
  title = {RCCIIT Art Club Website},
  year = {2023},
  howpublished = {\url{https://www.npmjs.com/package/rcciit-art-club-website}}
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
