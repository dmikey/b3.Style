b3.Style
========

An Enyo component to create inline style sheets on the fly, and programmatically


How to Use
==========

Add style.js to html

    <script src="style.js"></script>

Or enyo.depends b3.Style

    enyo.depends("b3.Style"); //insert location for b3.Style here

Scenarios
=========

define styles as components inline using a CSS selector style with psuedo elements!

    var test = enyo.create({
        components: [
            {kind:"b3.Style", name: "styler", components:[
                {selector:".test::after", style:{
                    content: "''",
                    background: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/owl1.jpg)",
                    opacity: 0.5,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    "z-index": -1
                }},
                {selector:".test", style:{
                    width: "200px",
                    height: "200px",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    display: "block",
                    position: "relative"
                }},
            ]},
            {
                classes:"test",
                content: "Some Content"
            }
        ],
    });

    test.renderInto(targetone);

    //add styles programatically
    test.$.styler.addStyle({
        selector:".test",
        style: {border:"solid 1px #000"}
    });

    //request styler to render
    test.$.styler.render();

define styles that don't belong to a parent, style globals.

    var test2 = enyo.create({
            kind:"b3.Style", name: "styler", components:[
            {selector:"body", style:{
                background: "#eee",
            }},
    ]});

    test2.renderInto(document.getElementById("targettwo"));

    test2.addStyle({
        selector:"body",
        style: {
            border:"solid 1px red",
            margin: 0,
        }
    });

    test2.render();

style the parent, by forgetting the selector!

    var test3 = enyo.create({
        components:[
            {
                content: "booo yeah",
                style: "color:#fff"
            },
            {
                kind:"b3.Style", name: "styler", components:[
                {style:{
                    background: "blue",
                    height: "100px",
                    width: "100px",
                    "margin-top": "10px"
                }},
            ]}
        ]
    });

    test3.renderInto(document.getElementById("targetthree"));

Demo
====

[Fiddle](http://jsfiddle.net/toxigenicpoem/n8ayg/show/)

To Dos
======

Too many to list ATM, use it if you need it and be happy