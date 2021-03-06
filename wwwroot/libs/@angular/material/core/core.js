var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { MdLineModule } from './line/line';
import { RtlModule } from './rtl/dir';
import { MdRippleModule } from './ripple/ripple';
import { PortalModule } from './portal/portal-directives';
import { OverlayModule } from './overlay/overlay-directives';
import { A11yModule, A11Y_PROVIDERS } from './a11y/index';
import { OVERLAY_PROVIDERS } from './overlay/overlay';
// RTL
export { Dir, RtlModule } from './rtl/dir';
// Portals
export { Portal, BasePortalHost, ComponentPortal, TemplatePortal } from './portal/portal';
export { PortalHostDirective, TemplatePortalDirective, PortalModule } from './portal/portal-directives';
export { DomPortalHost } from './portal/dom-portal-host';
// Overlay
export { Overlay, OVERLAY_PROVIDERS } from './overlay/overlay';
export { OverlayContainer } from './overlay/overlay-container';
export { OverlayRef } from './overlay/overlay-ref';
export { OverlayState } from './overlay/overlay-state';
export { ConnectedOverlayDirective, OverlayOrigin, OverlayModule } from './overlay/overlay-directives';
export * from './overlay/position/connected-position-strategy';
export * from './overlay/position/connected-position';
// Gestures
export { MdGestureConfig } from './gestures/MdGestureConfig';
// Ripple
export { MdRipple, MdRippleModule } from './ripple/ripple';
// a11y
export { MdLiveAnnouncer, LIVE_ANNOUNCER_ELEMENT_TOKEN } from './a11y/live-announcer';
export { FocusTrap } from './a11y/focus-trap';
export { InteractivityChecker } from './a11y/interactivity-checker';
export { isFakeMousedownFromScreenReader } from './a11y/fake-mousedown';
export { A11yModule } from './a11y/index';
export { MdUniqueSelectionDispatcher } from './coordination/unique-selection-dispatcher';
export { MdLineModule, MdLine, MdLineSetter } from './line/line';
// Style
export { applyCssTransform } from './style/apply-transform';
// Error
export { MdError } from './errors/error';
// Misc
// Keybindings
export * from './keyboard/keycodes';
export * from './compatibility/style-compatibility';
// Animation
export * from './animation/animation';
// Coersion
export { coerceBooleanProperty } from './coersion/boolean-property';
export { coerceNumberProperty } from './coersion/number-property';
export var MdCoreModule = (function () {
    function MdCoreModule() {
    }
    MdCoreModule.forRoot = function () {
        return {
            ngModule: MdCoreModule,
            providers: [A11Y_PROVIDERS, OVERLAY_PROVIDERS],
        };
    };
    MdCoreModule = __decorate([
        NgModule({
            imports: [MdLineModule, RtlModule, MdRippleModule, PortalModule, OverlayModule, A11yModule],
            exports: [MdLineModule, RtlModule, MdRippleModule, PortalModule, OverlayModule, A11yModule],
        }), 
        __metadata('design:paramtypes', [])
    ], MdCoreModule);
    return MdCoreModule;
}());

//# sourceMappingURL=core.js.map
