export class UIEnhancerInjector {
    public injectEnhancers(): void {

        var readiumIframeBodies = $("iframe").contents().find("body").not(".fl-prefsEditor-separatedPanel");

        fluid.defaults("fluid.uiInjector", {
            gradeNames: ["fluid.component"],
            components: {
                iFrameUIEnhancer: {
                    type: "fluid.uiEnhancer",
                    // container: "body",
                    options: {
                        model: "{fluid.pageEnhancer}.uiEnhancer.model",
                        gradeNames: ["fluid.uiEnhancer.starterEnactors"],
                        components: {
                            textSize: {
                                options: {
                                    model: {
                                        value: "{uiEnhancer}.model.fluid_prefs_textSize"
                                    }
                                }
                            },
                            textFont: {
                                options: {
                                    model: {
                                        value: "{uiEnhancer}.model.fluid_prefs_textFont"
                                    }
                                }
                            },
                            contrast: {
                                options: {
                                    model: {
                                        value: "{uiEnhancer}.model.fluid_prefs_contrast"
                                    }
                                }
                            },
                            lineSpace: {
                                options: {
                                    model: {
                                        value: "{uiEnhancer}.model.fluid_prefs_lineSpace"
                                    }
                                }
                            },
                            enhanceInputs: {
                                options: {
                                    model: {
                                        value: "{uiEnhancer}.model.fluid_prefs_enhanceInputs"
                                    }
                                }
                            },
                            tableOfContents: {
                                options: {
                                    model: {
                                        value: "{uiEnhancer}.model.fluid_prefs_layoutControls"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        fluid.each(readiumIframeBodies, function (readiumIframeBody) {
            var injector = fluid.uiInjector({
                components: {
                    iFrameUIEnhancer: {
                        container: readiumIframeBody
                    }
                }
            })
        });
    }
}
