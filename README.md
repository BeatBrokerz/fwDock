Flex Widget: Standalone Player
=============

![Standalone Player Preview](http://www.beatbrokerz.com/flex/widget/fwdock/preview.png)

This is a docked player for your flex app. It stays fixed to the bottom of the screen and supports licensing options, playlist changing, shopping cart access, checkout access, and all other standard music controls. It is also responsive to screen size and will adjust its controls and layout according to the screen size it's being viewed on.

* [**LIVE DEMO** (jsfiddle.net)](http://jsfiddle.net/beatbrokerz/4PLxR/)

### Pre-requisites

This widget requires a [flex app](http://www.beatbrokerz.com/flex) to be installed to your webpage in order for it to do anything useful. Refer to the [flex installation guide](http://www.beatbrokerz.com/flex/start) for more information on how to set up your own music app.

Once you have a flex app installed on your page, follow these steps to use this widget:

### Autoload Usage

This widget can be auto-loaded from the Beat Brokerz CDN. Use the following url in your autoload settings:

```
//www.beatbrokerz.com/flex/widget/fwdock/widget.js
```

> You can use the [widget autoloader](http://www.beatbrokerz.com/flex/start/settings#autoloader) feature in your flex app settings (on Beat Brokerz) to autoload this widget automatically on every page your flex app is installed to.
>
> Or you can autoload it selectively on your pages using javascript:
> ```javascript
> flexloader.autoload('//www.beatbrokerz.com/flex/widget/fwdock/widget.js');
> ```
> #### Autoload Options
> If autoloading from javascript, this widget supports the following options:
> **autodeploy**: (boolean) // if set to true, the widget will automatically display after autoloading
>
> ```javascript
> flexloader.autoload('//www.beatbrokerz.com/flex/widget/fwdock/widget.js', { autodeploy: true });
> ```


### Widget Files / Controlled Loading

If you want to load this widget from your own server or you want to explicitly control the resources that get loaded on your page, you'll need to do the following:

1. Download the widget package [.zip file](https://github.com/beatbrokerz/flex-fwdock/archive/master.zip)
2. Extract the contents and upload the files/folders to a public location on your webserver.

* fwdock/widget.js (autoload ready)
* fwdock/widget.css

If you choose not to autoload, then you'll need to manually reference the required resources in your page like so:

> ```html
> <script type="text/javascript" src="/path/to/fwdock/widget.js"></script>
> <link rel="stylesheet" type="text/css" href="/path/to/fwdock/widget.css" />
> ```

### Usage Instructions

Once the widget is loaded on your page, display the widget using any of the standard [widget display methods](http://www.beatbrokerz.com/flex/widgets#display-methods). However, this widget should only be placed on your page once since it is a fixed position widget and multiple placements would be redundant. Also, if you use autoloading with the 'autodeploy' option set to true, then this isn't even necessary.

> **Embed Example:** 
> ```html
> <div data-bbflex="widget:fwdock"></div>
> ```

### Widget Settings

The widget supports the following settings:

1. **fullscreen**: Optional. A boolean value (true/false) which controls if the 'go fullscreen' button is shown. Default: true
2. **theme**: Optional. A string value which allows you to define a custom [theme prefix](http://www.beatbrokerz.com/flex/widgets/theming) for the widget

 
### Theme & Structure Reference

The rendered widget uses the following template structure and css classing.

```html

```
