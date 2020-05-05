The following files show the first, live implementation of yourData on our Wagtail (Django) website which is also visible to UK visitors here: https://opendemocracy.net/yourdatalive

This is implemented using the [Wagxperience personalisation module](http://wagxperience.io/). The exact modifications in this iteration are captured in the following files from our website. The website repository is not yet open-source but we hope that the files here will help anyone wanting to make concrete contributions to the project design.

- A custom Django middleware file `middleware/yourdata.py`

- Addition of the yourData data visualisation popup to our article page template made with [the Jinja templating engine](https://jinja.palletsprojects.com/en/2.10.x/templates/) `templates/core/article_page.jinja`

- Addition of the yourData icon to the base template `templates/base.jinja`.

- Styles added to `assets/scss/components/article-page.scss`



We also have a CodePen where design suggestions can be made: https://codepen.io/mattlinares/pen/RwWxPZL


yourData icon is Creative Commons CCBY by Fauzan Adiima from The Noun Project collection. https://thenounproject.com/fauzan94/collection/cloud-computing-glyph-24/?i=2645467