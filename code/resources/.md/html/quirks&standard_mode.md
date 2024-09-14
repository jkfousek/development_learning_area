# Quirks Mode

In the old days of the web, pages were typically written in two versions: One for Netscape Navigator, and one for Microsfot Internet Explorer. When the web standards were made at W3C, browsers could not just start using them, as doing so would break most existing sites on the web. Browsers therefore introduceed two modes to treat new standards complaint site differently form old legacy sites.

There are now three modes used by layout engines in the web browsers: quirks mode, limited-quirks mode, and no-quirks mode. in **quirks mode**, layout emulates behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespead adoption of web standards. In no-quirks mode, the behavior is (hopefully) the desired behavior described by the modern HTML and CSS specifications. In limited-quirks mode, there are only a very small number of quirks implemented.

The limited-quirks and no-quirks modes used to be called "almost-standards" mode and "full-standards" mode, respectively. These names have been changed as the behavior is now standardized.

## How do browsers determine which mode to use?

For HTML documents, browsers use a **DOCTYPE** in the beginning of the document to decide wheather to handle it in quirks mode or standard mode. To ensure that your page uses full standards mode, make sure that your page has a **DOCTYPE** like in this example:

&lt;!doctype html&gt;<br>
&lt;html lang="en"&gt;<br>
  &lt;head&gt;<br>
    &lt;meta charset="UTF-8"&gt;<br>
    &lt;title>Hello World!</title&gt;<br>
  &lt;/head&gt;<br>
  &lt;body&gt;&lt;/body&gt;<br>
&lt;/html&gt;<br>

The DOCTYPE shown in the example, is the simplest possible, and the one recommended by current HTML standards. Earlier verision of the HTML standard recommended other variants, but all existing browsers today will use full standards mode for this DOCTYPE. Therea are no valid reasons to use a more complicated DOCTYPE. if you do use another DOCTYPE, you may risk choosing one which triggers almost standard mode or quirks mode.

The only purpose of the **DOCTYPE html** is to activate no-quirks mode. Older versions of HTML standard DOCTYPEs provided additional meaning, but no browser ever used the DOCTYPE for anything other than switching between render modes.