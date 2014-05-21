flexloader.extendApp(function ($, App, config) {

    App.addWidget('fwdock', {

        html: function (template, settings) {

            var defaultSettings = $.extend({
                fullscreen: true
            }, settings);

            return '\
              <div id="fwdock-container">\
                <div class="fwdock-playlist-container">\
                  <div class="fwdock-playlist">\
                    <div data-bbflex="widget: \'playlist\', scroll: true"></div>\
                  </div>\
                  <div data-bind="click: music.showPlaylists" class="fwdock-playlist-more"><a href="javascript:;" class="jp-button"><i class="fwicon-cd"></i> Change Playlist</a></div>\
                  <div class="fwdock-playlist-title-wrap">\
                    <i class="fwicon-music"></i> <span class="fwdock-title" data-bind="html: music.activePlaylist().title"></span>\
                (<span class="fwdock-total-beats" data-bind="html: music.Playlist[music.activePlaylist().id].count">0</span> Beats)</div>\
                </div>\
                <div class="fwdock-music-buttons">\
                  <a href="javascript:;" class="fwdock-button small white circle fw-previous"><i class="fwicon-fast-bw" style="margin-left:-2px;"></i></a>\
                  <a href="javascript:;" class="fwdock-button medium white circle fw-play"><i class="fwicon-play"></i></a>\
                  <a href="javascript:;" class="fwdock-button medium white circle fw-pause" style="display:none"><i class="fwicon-pause" style="margin-left:1px;"></i></a>\
                  <a href="javascript:;" class="fwdock-button small white circle fw-next"><i class="fwicon-fast-fw" style="margin-left:2px;"></i></a>\
                </div>\
                <div class="fwdock-volume-controls">\
                <div class="fw-volume-bar-container">\
                    <a data-bind="visible: !music.muted()" href="javascript:;" class="fw-mute" tabindex="1"><i class="flexicon-volume-up"></i></a>\
                    <a data-bind="visible: music.muted()" href="javascript:;" class="fw-unmute" tabindex="1"><i class="flexicon-volume-down"></i></a>\
                    <div class="fw-volume-bar">\
                        <div class="fw-volume-bar-value">\
                            <div class="bullet"></div>\
                        </div>\
                    </div>\
                </div>\
                </div>\
                <div class="fwdock-nowplaying-info">\
                 <div data-bind="visible: nowplaying().nid > 0" style="display:none">\
                  <img class="fwdock-nowplaying-image" data-bind="click: music.showLicenseOptions, visible: nowplaying().nid > 0, attr: { src: nowplaying().thumbnail }" style="display:none" />\
                  <div class="fwdock-addtocart" data-bind="click: music.showLicenseOptions"><i title="Purchase Options" data-delay="500" class="fwicon-dollar show-tooltip"></i></div>\
                  <div class="fwdock-progressbar" data-bbflex="widget: \'progressbar\'" style="height:12px; width:215px;"></div>\
                  <div class="fwdock-nowplaying-music">\
                <div style="cursor:pointer" class="title" data-bind="html: nowplaying().title, click: music.showLicenseOptions"></div>\
                <div class="artist" data-bind="html: nowplaying().artist"></div>\
                  </div>\
                  <div data-bind="visible: app.settings.bootmode != \'disabled\'" class="fwdock-side-buttons">\
                <i title="Launch Fullscreen" data-delay="500" data-toggle="tooltip" class="fwicon-resize-full show-tooltip"></i>\
                  </div>\
                 </div>\
                </div>\
                <div class="fwdock-command-options">\
                  <a href="javascript:;" class="fwdock-button fwdock-playlist-menu medium white circle slide-toggle"><i title="Playlist Menu" class="fwicon-align-justify" style="margin:8px 0 0 0;"></i></a>\
                  <div data-bind="click: cart.show" class="fwdock-command-cart">\
                <div class="items-count"><i class="fwicon-basket"></i> <span data-bind="html: cart().items.length + \' Items\'"></span></div>\
                <div class="items-total" data-bind="html: \'$\' + cart().total"></div>\
                  </div>\
                  <div class="items-checkout" data-bind="visible: cart().items.length > 0" style="display:none"><a data-bind="click: cart.checkout" class="fwdock-button fwdock-checkout-button medium green rounded">Checkout</a></div>\
                </div>\
              </div>\
              ';
        },
        init: function (template, widget, settings) {

            App.Music.addInterface(widget.find(".fwdock-music-buttons,.fwdock-volume-controls"), $.bbflex.config.fw_interface);

            widget.find('.fwdock-button').click(function () {
                this.blur();
            });
            widget.find('.show-tooltip').tooltip();
            widget.find('.fwicon-resize-full').click(function () {
                App.fullScreen();
            });
            widget.find('.fwdock-button.slide-toggle').click(function () {
                widget.find(this).toggleClass('black white');
                widget.find(this).hasClass('black') ? widget.find('.fwdock-playlist-container').animate({ height: 230 }) : widget.find('.fwdock-playlist-container').animate({ height: 0 });
            });

        }

    });

    /**
     * Autoload Handler:
     *
     * Our autoload handling is placed after addWidget() for good reason. We want to ensure the widget is added
     * right away because of our 'autodeploy' option that will add the widget into the DOM and then display it
     * automatically.
     *
     * Also, we separate the task into two parts since we want to put the placeholder into the DOM right
     * away, but we dont want to actually load the widget until the app data is ready, so we use the
     * App.ready() method to delay the actual rendering of the widget.
     *
     * Note: if this handling block was placed before the addWidget() method, things would still work fine if
     * doing the autoload during page boot (because of our App.ready() technique). The problem surfaces when
     * we try to autoload this widget after the page has loaded (and therefore the app is already ready!).
     *
     */
    if (config.autoload) {
        flexloader.addResource({ src: config.script.basepath + 'widget.css' });
        if (config.options && config.options.autodeploy) {
            $('body').append('<div id="fwdock-auto">');
            App.ready(function() {
                $('#fwdock-auto').bbflex({ widget: 'fwdock' });
            })
        }
    }

});
