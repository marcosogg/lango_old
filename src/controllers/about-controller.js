export const aboutController = {
    index: {
      handler: function (request, h) {
        const viewData = {
          title: "About LANGO",
        };
        return h.view("about-view", viewData);
      },
    },
  };