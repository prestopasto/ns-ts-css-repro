/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, NavigatedData, Page } from "@nativescript/core";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;

  page.bindingContext = new HomeViewModel();
}

export function dynamicStyleLabelLoaded(args: EventData) {
  args.object.set("style", "background-color:orangered");
}

export function dynamicPropertyLabelLoaded(args: EventData) {
  args.object.set("style", "--dynamic-color:blue");
}
