# RCCIIT Art Club Website

This is a Node.js package that allows you to create and manage a website for the RCCIIT Art Club. You can use this package to showcase your artworks, events, and members. You can also customize the look and feel of your website with different themes and layouts.

![Screenshot of the website](https://github.com/Soumya-Chakraborty/RCCIIT_Art_Club/blob/main/app/ANIME%20ART%20CONTEST%20POSTER.png?raw=true)

## Installation

To install this package, you need to have Node.js and npm installed on your system. You can download them from [here](^1^).

Then, run the following command in your terminal:

```bash
npm install rcciit-art-club-website
```

This will install the package and its dependencies in your project folder.

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

Please read our [contribution guidelines](CONTRIBUTING.md) before making any changes.

## Support

If you need any help or have any questions about this project, you can contact us at rcciitartclub@gmail.com. You can also follow us on [Facebook](^3^) and [Instagram](^4^) for the latest updates.

For more information on our support policy, please read our [support document](SUPPORT.md).

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

Source: Conversation with Bing, 23/12/2023
(1) About package README files | npm Docs. https://docs.npmjs.com/about-package-readme-files/.
(2) Writing the Perfect Readme for Your Node Library. https://blog.bitsrc.io/writing-the-perfect-reademe-for-your-node-library-2d5f24dc1c06.
(3) How to write a great README for your GitHub project. https://dbader.org/blog/write-a-great-readme-for-your-github-project.
(4) The Real Guide to Writing a NPM Package | by Luke Perry | Medium. https://medium.com/@luke_perry_dev/the-real-guide-to-writing-a-npm-package-9dcd68ee4707.
(5) undefined. https://bing.com/search?q=.
(6) undefined. https://docs.readthedocs.io/.
