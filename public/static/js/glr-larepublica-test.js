var GLR_LR = GLR_LR || {};

(function (namespace) {

    var navigation = {
        scripts: {},
        styles: {},
        insertHeader: function (content) {
            var contenedorHeader = document.getElementsByTagName("head");
            if ((contenedorHeader = contenedorHeader.length ? contenedorHeader : document.getElementsByTagName("body")).length) {
                var appendContent = contenedorHeader[0];
                appendContent.insertBefore(content, appendContent.firstChild);
            }
        },
        insertBody: function (content) {
            var contenedorBody = document.getElementsByTagName("body");
            if ((contenedorBody = contenedorBody.length ? contenedorBody : document.getElementsByTagName("body")).length) {
                var appendContent = contenedorBody[0];
                appendContent.insertBefore(content, appendContent.lastChild);
            }
        },
        addScript: function (script, callback) {
            var contenedorScript = document.createElement("script");
            contenedorScript.type = "text/javascript";
            contenedorScript.async = true;
            contenedorScript.src = script;

            if (typeof callback != 'undefined') {
                contenedorScript.onload = function () {
                    callback();
                };
            }

            this.insertHeader(contenedorScript);
        },
        addStyles: function (style, opt = {}) {
            var that = this;
            if (style.length) {
                style.forEach(function (item) {
                    var content = document.createElement("link");

                    if (Object.values(opt).length) {
                        if (opt.rel) content.rel = opt.rel;
                        if (opt.as) content.as = opt.as;
                        if (opt.importance) content.importance = opt.importance;
                    }

                    content.href = item;
                    that.insertHeader(content);
                })
            }
        },
        initQuantcastHeader: function () {
            console.log('iniciamos initQuantcastHeader');
            // var host = window.location.hostname;
            var host = "larepublica.pe";
            var element = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];
            var url = 'https://quantcast.mgr.consensu.org'
                .concat('/choice/', 'wBwDK0_B3dbxw', '/', host, '/choice.js')
            var uspTries = 0;
            var uspTriesLimit = 3;
            element.async = true;
            element.type = 'text/javascript';
            element.src = url;

            firstScript.parentNode.insertBefore(element, firstScript);

            function makeStub() {
                var TCF_LOCATOR_NAME = '__tcfapiLocator';
                var queue = [];
                var win = window;
                var cmpFrame;

                function addFrame() {
                    var doc = win.document;
                    var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

                    if (!otherCMP) {
                        if (doc.body) {
                            var iframe = doc.createElement('iframe');

                            iframe.style.cssText = 'display:none';
                            iframe.name = TCF_LOCATOR_NAME;
                            doc.body.appendChild(iframe);
                        } else {
                            setTimeout(addFrame, 5);
                        }
                    }
                    return !otherCMP;
                }

                function tcfAPIHandler() {
                    var gdprApplies;
                    var args = arguments;

                    if (!args.length) {
                        return queue;
                    } else if (args[0] === 'setGdprApplies') {
                        if (
                            args.length > 3 &&
                            args[2] === 2 &&
                            typeof args[3] === 'boolean'
                        ) {
                            gdprApplies = args[3];
                            if (typeof args[2] === 'function') {
                                args[2]('set', true);
                            }
                        }
                    } else if (args[0] === 'ping') {
                        var retr = {
                            gdprApplies: gdprApplies,
                            cmpLoaded: false,
                            cmpStatus: 'stub'
                        };

                        if (typeof args[2] === 'function') {
                            args[2](retr);
                        }
                    } else {
                        queue.push(args);
                    }
                }

                function postMessageEventHandler(event) {
                    var msgIsString = typeof event.data === 'string';
                    var json = {};

                    try {
                        if (msgIsString) {
                            json = JSON.parse(event.data);
                        } else {
                            json = event.data;
                        }
                    } catch (ignore) {
                    }

                    var payload = json.__tcfapiCall;

                    if (payload) {
                        window.__tcfapi(
                            payload.command,
                            payload.version,
                            function (retValue, success) {
                                var returnMsg = {
                                    __tcfapiReturn: {
                                        returnValue: retValue,
                                        success: success,
                                        callId: payload.callId
                                    }
                                };
                                if (msgIsString) {
                                    returnMsg = JSON.stringify(returnMsg);
                                }
                                if (event && event.source && event.source.postMessage) {
                                    event.source.postMessage(returnMsg, '*');
                                }
                            },
                            payload.parameter
                        );
                    }
                }

                while (win) {
                    try {
                        if (win.frames[TCF_LOCATOR_NAME]) {
                            cmpFrame = win;
                            break;
                        }
                    } catch (ignore) {
                    }

                    if (win === window.top) {
                        break;
                    }
                    win = win.parent;
                }
                if (!cmpFrame) {
                    addFrame();
                    win.__tcfapi = tcfAPIHandler;
                    win.addEventListener('message', postMessageEventHandler, false);
                }
            };

            makeStub();

            var uspStubFunction = function () {
                var arg = arguments;
                if (typeof window.__uspapi !== uspStubFunction) {
                    setTimeout(function () {
                        if (typeof window.__uspapi !== 'undefined') {
                            window.__uspapi.apply(window.__uspapi, arg);
                        }
                    }, 500);
                }
            };

            var checkIfUspIsReady = function () {
                uspTries++;
                if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                    console.warn('USP is not accessible');
                } else {
                    clearInterval(uspInterval);
                }
            };

            if (typeof window.__uspapi === 'undefined') {
                window.__uspapi = uspStubFunction;
                var uspInterval = setInterval(checkIfUspIsReady, 6000);
            }
        },
        initQuantcastFooter: function () {
            console.log('iniciamos initQuantcastFooter');
            var _qevents = _qevents || [];
            var elem = document.createElement('script');
            elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
            elem.async = true;
            elem.type = "text/javascript";
            var scpt = document.getElementsByTagName('script')[0];
            scpt.parentNode.insertBefore(elem, scpt);
            _qevents.push({
                qacct: "p-wBwDK0_B3dbxw"
            });

            var quancastTrackerDiv = document.createElement('div');
            var quancastTrackerImg = document.createElement('img');

            quancastTrackerDiv.style.display = 'none';
            quancastTrackerImg.src = '//pixel.quantserve.com/pixel/p-wBwDK0_B3dbxw.gif'
            quancastTrackerImg.border = "0";
            quancastTrackerImg.width = 1;
            quancastTrackerImg.height = 1;
            quancastTrackerImg.alt = "Quantcast";

            quancastTrackerDiv.appendChild(quancastTrackerImg);


            this.insertBody(quancastTrackerDiv);
        },
        init: function () {
            console.log('iniciamos script');
            console.log('iniciamos script para LR');
            this.initQuantcastHeader();
            this.initQuantcastFooter();
        }
    };

    namespace.navigation = navigation;

    if (document.addEventListener) {
        window.addEventListener('DOMContentLoaded', function () {
            document.addEventListener("scroll", function thirdPartyQuantcast() {
                document.removeEventListener("scroll", thirdPartyQuantcast);
                console.log("===>Quantcast");
                navigation.init();
            })
        });
        //console.log('addEventListener');
    } else {
        window.attachEvent('onload', function () {
            navigation.init();
        });
    }

})(GLR_LR);
