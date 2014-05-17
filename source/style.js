enyo.kind({
    name: "b3.Style",
    tag: "style",
    styles:[],
    rendered: function(){
        this.inherited(arguments);
        this.processStyles();
        //after rendered before inserting styles, check to see if CSS should
        //be targeted to a parent
        //todo: using a class here would be nice, no?
        if(this.parent && this.parent.id){
            var i = this.styles.length;
            while (--i > -1) this.styles[i] = "#" + this.parent.id + " " + this.styles[i];
        }

        //replace the inner content of this control, with raw style CSS
        document.getElementById(this.id).innerHTML = this.styles.join(" \n");
    },
    processStyles: function() {
          this.styles = [];
          enyo.forEach(this.components, function(style){
            var innerStyles = [];
              for (var property in style.style) {
                if (style.style.hasOwnProperty(property)) {
                    innerStyles.push(property + ":" + style.style[property]);
                }
            }

            var selector = style.selector || "";
            //push inner styles to a full array of styles
            this.styles.push(selector + " {" + innerStyles.join(';')  + "}");
        }, this)
    },
    addStyle: function(style) {
        this.components.push(style);
    }
});