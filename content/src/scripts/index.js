/*
 * created by aditya on 21/09/17
 */

"use strict";

import React from "react";
import {render} from "react-dom";

import App from "./components/app/App";

const ANCHOR_ID = 'indifi-anchor';

const anchor = document.createElement("div");
anchor.id = ANCHOR_ID;

document.body.insertBefore(anchor, document.body.childNodes[0]);

render(
    <App/>,
    document.getElementById(ANCHOR_ID)
);
