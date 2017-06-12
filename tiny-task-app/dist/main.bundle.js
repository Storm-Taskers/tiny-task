webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(164);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_service_nav_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(navService) {
        this.navService = navService;
        this.title = 'Tiny Task';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(270),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nav_service_nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nav_service_nav_service__["a" /* NavService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_auth0_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_modules_app_router_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth0_home_home_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth0_auth0_routes__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_projects_service_projects_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_nav_service_nav_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_team_service_team_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_info_user_info_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_profile_user_profile_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projects_projects_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__projects_project_details_project_details_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__projects_project_details_phases_phases_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__projects_project_details_project_user_project_user_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__projects_project_details_team_members_team_members_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__projects_project_details_phases_tasks_tasks_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projects_project_details_project_user_user_details_user_details_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth0_callback_callback_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__material_modules_material_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__qontu_ngx_inline_editor__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__teams_teams_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__teams_team_details_team_details_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__page_not_found_page_not_found_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_dnd__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Bootstrap top-level application





// Import application services





// Import application sub-components










// Import Materials






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__projects_project_details_project_details_component__["a" /* ProjectDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__projects_project_details_phases_phases_component__["a" /* PhasesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__projects_project_details_phases_tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_20__projects_project_details_project_user_project_user_component__["a" /* ProjectUserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__projects_project_details_project_user_user_details_user_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__projects_project_details_team_members_team_members_component__["a" /* TeamMembersComponent */],
            __WEBPACK_IMPORTED_MODULE_27__teams_teams_component__["a" /* TeamsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth0_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__auth0_callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_28__teams_team_details_team_details_component__["a" /* TeamDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auth0_auth0_component__["a" /* Auth0Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__router_modules_app_router_module__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_25__material_modules_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_26__qontu_ngx_inline_editor__["a" /* InlineEditorModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__auth0_auth0_routes__["a" /* ROUTES */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_30_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_projects_service_projects_service__["a" /* ProjectsService */], __WEBPACK_IMPORTED_MODULE_12__services_nav_service_nav_service__["a" /* NavService */], __WEBPACK_IMPORTED_MODULE_13__services_team_service_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth0Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Auth0Component = (function () {
    function Auth0Component(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    Auth0Component.prototype.ngOnInit = function () {
    };
    return Auth0Component;
}());
Auth0Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'auth0',
        template: __webpack_require__(271),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], Auth0Component);

var _a;
//# sourceMappingURL=auth0.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });


var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__["a" /* CallbackComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=auth0.routes.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: []
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase; });
var Phase = (function () {
    function Phase() {
    }
    return Phase;
}());

//# sourceMappingURL=Phase.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Phase__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhasesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhasesComponent = (function () {
    function PhasesComponent(projectsService) {
        this.projectsService = projectsService;
        this.dragOperation = true;
    }
    PhasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getTasks(this.phase.id).then(function (result) {
            _this.phaseTasks = result.task_info;
        });
    };
    PhasesComponent.prototype.editPhaseName = function (phaseId, newName) {
        this.projectsService.editPhaseName(phaseId, newName);
    };
    PhasesComponent.prototype.deletePhase = function (phaseId) {
        if (confirm('Are you sure you want to delete this phase?')) {
            this.projectsService.deletePhase(phaseId, this.phaseTasks);
        }
    };
    PhasesComponent.prototype.addNewTask = function (phaseId) {
        var _this = this;
        this.projectsService.createTask(phaseId)
            .then(function (task) {
            _this.phaseTasks.push(task);
        });
    };
    PhasesComponent.prototype.deleteTask = function (taskId, task) {
        this.projectsService.deleteTask(taskId, task);
        this.phaseTasks.splice(this.phaseTasks.findIndex(function (task) { return task.id === taskId; }), 1);
    };
    PhasesComponent.prototype.toggleTaskComplete = function (taskId, task) {
        this.projectsService.updateTaskStatus(taskId, !task.complete);
        this.phaseTasks.find(function (task) { return task.id === taskId; }).complete = !task.complete;
    };
    PhasesComponent.prototype.handleError = function () {
        alert("50 Character Limit Exceeded");
    };
    return PhasesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Phase__["a" /* Phase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Phase__["a" /* Phase */]) === "function" && _a || Object)
], PhasesComponent.prototype, "phase", void 0);
PhasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'phases',
        template: __webpack_require__(275),
        styles: [__webpack_require__(250)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__["a" /* ProjectsService */]) === "function" && _b || Object])
], PhasesComponent);

var _a, _b;
//# sourceMappingURL=phases.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task() {
    }
    return Task;
}());

//# sourceMappingURL=Task.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Task__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = (function () {
    function TasksComponent(projectsService) {
        this.projectsService = projectsService;
    }
    TasksComponent.prototype.editTaskName = function (taskId, newName) {
        var _this = this;
        this.projectsService.editTaskName(taskId, newName)
            .then(function (updatedTask) {
            _this.task = updatedTask;
        });
    };
    TasksComponent.prototype.handleError = function () {
        alert("144 Character Limit Exceeded");
    };
    return TasksComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Task__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Task__["a" /* Task */]) === "function" && _a || Object)
], TasksComponent.prototype, "task", void 0);
TasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tasks',
        template: __webpack_require__(276),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__["a" /* ProjectsService */]) === "function" && _b || Object])
], TasksComponent);

var _a, _b;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectUserComponent = (function () {
    function ProjectUserComponent() {
    }
    ProjectUserComponent.prototype.ngOnInit = function () {
    };
    return ProjectUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */]) === "function" && _a || Object)
], ProjectUserComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], ProjectUserComponent.prototype, "teamMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ProjectUserComponent.prototype, "removeFromTeam", void 0);
ProjectUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'user',
        template: __webpack_require__(278),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [])
], ProjectUserComponent);

var _a;
//# sourceMappingURL=project-user.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-user-details',
        template: __webpack_require__(279),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [])
], UserDetailsComponent);

//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamMembersComponent = (function () {
    function TeamMembersComponent() {
    }
    TeamMembersComponent.prototype.ngOnInit = function () {
    };
    return TeamMembersComponent;
}());
TeamMembersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-team-members',
        template: __webpack_require__(280),
        styles: [__webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [])
], TeamMembersComponent);

//# sourceMappingURL=team-members.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_project_details_project_details_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams_teams_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_team_details_team_details_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components for Router






// Routes to components
var routes = [
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'projects/:id', component: __WEBPACK_IMPORTED_MODULE_4__projects_project_details_project_details_component__["a" /* ProjectDetailsComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'teams', component: __WEBPACK_IMPORTED_MODULE_5__teams_teams_component__["a" /* TeamsComponent */] },
    { path: 'teams/:id', component: __WEBPACK_IMPORTED_MODULE_6__teams_team_details_team_details_component__["a" /* TeamDetailsComponent */] },
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        declarations: []
    })
], AppRouterModule);

//# sourceMappingURL=app-router.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_service_projects_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = (function () {
    function UserInfoComponent(userService, projectsService) {
        this.userService = userService;
        this.projectsService = projectsService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        // Stub 'Brian' for user profile
        console.log('Initiated');
        this.userService.getUserInfo('Brian');
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'user-info',
        template: __webpack_require__(284),
        styles: [__webpack_require__(259)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_projects_service_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_projects_service_projects_service__["a" /* ProjectsService */]) === "function" && _b || Object])
], UserInfoComponent);

var _a, _b;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "header {\n  grid-area: header;\n}\n\nhr {\n  width: 220px;\n}\n\n.container-nav {\n  background-color: white;\n  grid-area: nav;\n  padding: 30px;\n  border: .25px solid lightgrey;\n  box-shadow: 0px 2px 5px lightgrey;\n}\n\n.pageView {\n  grid-area: content;\n  padding: 10px;\n}\n\n.user-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: hsla(341, 59%, 48%, 1);\n  grid-area: profile;\n  padding: 5px;\n  max-height: auto;\n  box-shadow: 0px 2px 5px #888888;\n}\n\n.col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n}\n\na:link, a:visited {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 24px;\n  color: hsla(0, 0%, 55%, 1);\n  text-decoration: none;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\na:hover, a:active {\n  color: white;\n}\n\n.select {\n  color: #2196f3;\n}\n\n.app {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 160px 3fr;\n      grid-template-rows: 160px 3fr;\n  -ms-grid-columns: 280px 1fr;\n      grid-template-columns: 280px 1fr;\n  grid-template-areas:\n  \"profile content\"\n  \"nav content\";\n  grid-column-gap: 20px;\n  margin: 0;\n  height: 95vh;\n}\n\n.nav-items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap; \n}\n\n.material-icons {\n  margin-right: 10px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "a {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import ReactiveJS toPromise

var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-type': 'application/JSON' });
        this.baseUrl = 'http://localhost:8080';
        this.projectIds = [];
        this.projects = [];
        this.phases = [];
    }
    ProjectsService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    // Fetch Information
    ProjectsService.prototype.getProject = function (projectId) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/projects/" + projectId)
            .toPromise()
            .then(function (response) {
            _this.projects.push(response.json().project_info);
            _this.usersOnProject = response.json().user_info;
            _this.phases = response.json().phase_info;
            _this.currentProject = response.json().project_info;
            _this.totalWeight = 0;
            _this.completeWeight = 0;
            _this.progress = 0;
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.getTasks = function (phaseId) {
        var _this = this;
        return this.http.get(this.baseUrl + "/api/tasks/" + phaseId)
            .toPromise()
            .then(function (response) {
            response.json().task_info.forEach(function (task) {
                if (task.complete) {
                    _this.completeWeight += task.task_weight;
                }
                _this.totalWeight += task.task_weight;
                _this.progress = Math.floor((_this.completeWeight / _this.totalWeight) * 100);
            });
            return response.json();
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.getUserTasks = function (token) {
        return this.http.get(this.baseUrl + "/api/tasks/user/" + token)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.getTeamProjects = function (teamId) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/projects/teams/" + teamId)
            .toPromise()
            .then(function (response) {
            _this.projectIds = response.json();
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.getUserProjects = function (userId) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/users/projects/" + userId)
            .toPromise()
            .then(function (response) {
            _this.projectIds = response.json();
        })
            .catch(this.handleError);
    };
    // Post Information
    ProjectsService.prototype.createProject = function (teamId, userId) {
        var _this = this;
        this.http.post(this.baseUrl + "/api/projects", JSON.stringify({ project_name: 'New Project', user_id: userId, team_id: teamId }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.projects.push(response.json().project_info);
            _this.projectIds.push(response.json().project_info.id);
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.createPhase = function (projectId) {
        var _this = this;
        this.http.post(this.baseUrl + "/api/phases/" + projectId, JSON.stringify({ phase_name: "New Phase" }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.phases.push(response.json());
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.createTask = function (phaseId) {
        var _this = this;
        return this.http.post(this.baseUrl + "/api/tasks/" + phaseId, JSON.stringify({ task_name: 'New Task' }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.totalWeight += 1;
            _this.progress = Math.floor((_this.completeWeight / _this.totalWeight) * 100);
            return response.json();
        })
            .catch(this.handleError);
    };
    // Edit Information
    ProjectsService.prototype.editProjectName = function (projectId, projectName) {
        var _this = this;
        this.http.put(this.baseUrl + "/api/projects/" + projectId, JSON.stringify({ projectId: projectId, projectChanges: { project_name: projectName } }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.projects.find(function (project) { return project.id === projectId; }).project_name = projectName;
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.editProjectCompleteStatus = function (projectId, projectName, projectCompleted) {
        var _this = this;
        this.http.put(this.baseUrl + "/api/projects/" + projectId, JSON.stringify({ projectId: projectId, projectChanges: { project_name: projectName, complete: projectCompleted } }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.projects.find(function (project) { return project.id === projectId; }).complete = projectCompleted;
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.editPhaseName = function (phaseId, phaseName) {
        var _this = this;
        this.http.put(this.baseUrl + "/api/phases/" + phaseId, JSON.stringify({ phase_name: phaseName }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.phases.find(function (phase) { return phase.id === phaseId; }).phase_name = phaseName;
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.editTaskName = function (taskId, taskName) {
        return this.http.put(this.baseUrl + "/api/tasks/" + taskId, JSON.stringify({ taskChanges: {
                task_name: taskName
            }
        }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.updateTaskStatus = function (taskId, taskStatus) {
        var _this = this;
        this.http.put(this.baseUrl + "/api/tasks/" + taskId, JSON.stringify({ taskChanges: { complete: taskStatus } }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            if (response.json().complete) {
                _this.completeWeight += response.json().task_weight;
            }
            else {
                _this.completeWeight -= response.json().task_weight;
            }
            _this.progress = Math.floor((_this.completeWeight / _this.totalWeight) * 100);
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.updatePhaseOrder = function (projectId, phaseOrder) {
        this.http.put(this.baseUrl + "/api/projects/phases/" + projectId, JSON.stringify({ phase_order: phaseOrder }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
        })
            .catch(this.handleError);
    };
    // Delete Information
    ProjectsService.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.http.delete(this.baseUrl + "/api/projects/" + projectId)
            .toPromise()
            .then(function (response) {
            var projectToRemove = _this.projects.findIndex(function (project) { return project.id === projectId; });
            _this.projects.splice(projectToRemove, 1);
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.deletePhase = function (phaseId, tasks) {
        var _this = this;
        this.http.delete(this.baseUrl + "/api/phases/" + phaseId)
            .toPromise()
            .then(function (response) {
            var phaseToRemove = _this.phases.findIndex(function (phase) { return phase.id === phaseId; });
            _this.phases.splice(phaseToRemove, 1);
            tasks.forEach(function (task) {
                if (task.complete) {
                    _this.completeWeight -= task.task_weight;
                }
                _this.totalWeight -= task.task_weight;
            });
            _this.progress = _this.totalWeight !== 0 ? Math.floor((_this.completeWeight / _this.totalWeight) * 100) : 0;
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.deleteTask = function (taskId, task) {
        var _this = this;
        this.http.delete(this.baseUrl + "/api/tasks/" + taskId)
            .toPromise()
            .then(function (response) {
            if (task.complete) {
                _this.completeWeight -= task.task_weight;
            }
            _this.totalWeight -= task.task_weight;
            _this.progress = _this.totalWeight !== 0 ? Math.floor((_this.completeWeight / _this.totalWeight) * 100) : 0;
        })
            .catch(this.handleError);
        ;
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProjectsService);

var _a;
//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".current-phases {\n  color: white;\n  cursor: move;\n  min-width: 220px;\n  height: auto;\n  background-color: hsla(2, 81%, 65%, 1);\n  border-radius: 3px;\n  padding: 7px;\n  margin: 5px;\n  box-shadow: 0px 2px 5px #888888;\n}\n\n.project-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 8px;\n}\n\n.task-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.task {\n  background-color: white;\n  color: #00bcd4;\n  border-radius: 2px;\n  min-width: 220px;\n  max-width: 300px;\n  height: auto;\n  padding: 7px;\n  margin-bottom: 7px;\n  box-shadow: 0px 2px 2px #888888;\n}\n\n.task-completed {\n  background-color: white;\n  color: darkgrey;\n  border-radius: 2px;\n  min-width: 220px;\n  max-width: 300px;\n  height: auto;\n  padding: 7px;\n  margin-bottom: 7px;\n  opacity: .5;\n  text-decoration: line-through;\n  box-shadow: 0px 2px 2px #888888;\n}\n\n.phase-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "hr {\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.h2-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nh2 {\n  white-space: nowrap;\n  padding: 0px;\n  margin: 0px;\n  cursor: default;\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.container-team-members, .container-phases, .phases {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 30px;\n}\n\n.example-margin {\n  display: block;\n  height: 15px;\n  overflow: hidden;\n  position: relative;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  transition: opacity 250ms linear;\n  width: 1000px;\n}\n\n.percent {\n  margin-left: 7px;\n  color: rebeccapurple;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".current-team-members {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n  min-height: 130px;\n  min-width: 160px;\n  background-color: #00bcd4;\n  border-radius: 6px;\n  padding: 7px;\n  margin: 5px;\n  box-shadow: 0px 2px 5px #888888;\n}\n\n.material-icons.md-48 {\n  padding: 5px;\n  font-size: 64px;\n}\n\n.status {\n  font-size: 16px;\n}\n\n.projectMenu:hover {\n  background-color: hsla(40, 81%, 65%, 1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h2 {\n  display: inline;\n  padding: 0px;\n  margin: 0px;\n  cursor: default;\n}\n\nhr {\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.h2-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.container-project {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 30px;\n}\n\n.current-project {\n  color: white;\n  width: 280px;\n  background-color: hsla(2, 81%, 65%, 1);\n  border-radius: 3px;\n  padding: 7px;\n  margin: 5px;\n  box-shadow: 0px 2px 5px #888888;\n}\n\n.current-project > img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 280px;\n}\n\n.container-past-project {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.past-project {\n  color: white;\n  width: 280px;\n  background-color: hsla(348, 82%, 44%, .3);\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 10px;\n  margin: 5px;\n  box-shadow: 0px 2px 5px #888888;\n}\n\n.past-project > img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 280px;\n  opacity: .5;\n}\n\n.project-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".container-team-users, .user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 30px;\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h2 {\n  display: inline;\n  padding: 0px;\n  margin: 0px;\n  cursor: default;\n}\n\n.h2-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\nhr {\n  padding: 0px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.container-team, .team {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 30px;\n}\n\n.team {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: white;\n  background-color: hsla(2, 81%, 65%, 1);\n  min-width: 150px;\n  max-width: auto;\n  border-radius: 6px;\n  padding: 7px;\n  margin: 5px;\n  box-shadow: 0px 2px 5px #888888;\n}\n\n.team:hover {\n  background-color: hsla(40, 81%, 65%, 1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: white;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 22px;\n}\n\na:link, a:visited {\n  font-size: 16px;\n  color: white;\n  text-decoration: none;\n}\n\na:hover, a:active {\n  opacity: .6;\n}\n\n.material-icons.md-48 {\n  padding: 2px;\n  font-size: 64px;\n}\n\n.user-name {\n  font-weight: bold;\n}\n\n.email {\n  font-size: 16px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <!--<header>\n    <h1>{{ title }}</h1>\n  </header>-->\n<!--Render User Profile-->\n  <div class=\"user-info\">\n    <!--<auth0></auth0>-->\n    <user-info></user-info>\n  </div>\n<!--Render Nav Bar-->\n  <div class=\"container-nav\">\n    <nav class=\"nav-bar\">\n      <div class=\"col\">\n        <a routerLink=\"teams\" (click)=\"navService.changeToProjectsPage()\" ><i class=\"material-icons\">recent_actors</i>TEAMS</a>\n        <hr/>\n        <a routerLink=\"projects\"><i class=\"material-icons\">note</i>PROJECTS</a>\n        <hr/>\n        <a routerLink=\"\"><i class=\"material-icons\">date_range</i>CALENDAR</a>\n      </div>\n      <div *ngIf=\"navService.currentPage !== 'projects'\" class=\"col\">\n        <hr/>\n        <div class=\"nav-items\">\n          <a routerLink=\"\"><i class=\"material-icons\">forum</i>BULLETIN BOARD</a>\n        </div>\n        <hr/>\n        <div class=\"nav-items\">\n          <a routerLink=\"\"><i class=\"material-icons\">folder_shared</i>RESOURCES</a>\n        </div>\n      </div>\n    </nav>\n  </div>\n<!--Render Content-->\n  <div class=\"pageView\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Tiny Task</a>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        routerLink=\"/\">\n          Home\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"!auth.isAuthenticated()\"\n        (click)=\"auth.login()\">\n          Log In\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"auth.isAuthenticated()\"\n        (click)=\"auth.logout()\">\n          Log Out\n      </button>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"auth.isAuthenticated()\">\n  You are logged in!\n</h4>\n<h4 *ngIf=\"!auth.isAuthenticated()\">\n  You are not logged in! Please <a (click)=\"auth.login()\">Log In</a> to continue.\n</h4>"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<div class=\"current-phases\">\n  <div class=\"project-header\">\n    <inline-editor type=\"text\" [(ngModel)]=\"phase.phase_name\" (onSave)=\"editPhaseName(phase.id, $event)\" name=\"phase.phase_name\" size=\"15\" min=\"1\" max=\"50\" (onError)=\"handleError()\" placeholder=\"Phase Name\">\n    </inline-editor>\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n      <i class=\"material-icons\">more_vert</i>\n    </button>\n  </div>\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item disableRipple (click)=\"deletePhase(phase.id)\">\n      <div class=\"menu-item\">\n        <i class=\"material-icons\">delete_forever</i>\n        <span>Delete Phase</span>\n      </div>\n    </button>\n  </md-menu>\n<!--Implement ngFor to create Phase Details (task)-->\n<div dnd-sortable-container [sortableData]=\"phaseTasks\">\n  <div *ngFor=\"let task of phaseTasks; let i = index\" dnd-sortable [sortableIndex]=\"i\">\n    <div [ngClass]=\"!task.complete ? 'task-container task': 'task-container task-completed'\">\n      <tasks\n        [task]=\"task\">\n      </tasks>\n      <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <i class=\"material-icons\">more_vert</i>\n      </button>\n    </div>\n    <!--menu-->\n    <md-menu #menu=\"mdMenu\">\n      <button md-menu-item disableRipple (click)=\"toggleTaskComplete(task.id, task)\">\n        <div class=\"menu-item\">\n          <i class=\"material-icons\">done</i>\n          <span>Task Completed</span>\n        </div>\n      </button>\n\n      <button md-menu-item disableRipple (click)=\"deleteTask(task.id, task)\">\n        <div class=\"menu-item\">\n          <i class=\"material-icons\">assignment_ind</i>\n          <span>Assign to User</span>\n        </div>\n      </button>\n\n      <button md-menu-item disableRipple [mdMenuTriggerFor]=\"menu2\">\n        <div class=\"menu-item\">\n          <i class=\"material-icons\">assignment_ind</i>\n          <span>Task Difficulty</span>\n        </div>\n      </button>\n\n        <md-menu #menu2=\"mdMenu\">\n        </md-menu>\n        \n      <button md-menu-item disableRipple (click)=\"deleteTask(task.id, task)\">\n        <div class=\"menu-item\">\n          <i class=\"material-icons\">delete_forever</i>\n          <span>Delete Task</span>\n        </div>\n      </button>\n    </md-menu>\n    \n  </div>\n</div>\n  <div class=\"phase-footer\">\n    <button md-icon-button disableRipple (click)=\"addNewTask(phase.id)\">\n      <i class=\"material-icons\">library_add</i>\n      ADD A TASK\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<div class=\"task\">\n  <inline-editor type=\"text\" [(ngModel)]=\"task.task_name\" (onSave)=\"editTaskName(task.id, $event)\" name=\"task.task_name\" size=\"15\" min=\"1\" max=\"144\" (onError)=\"handleError()\" placeholder=\"Task Name\"></inline-editor>\n</div>"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"h2-header\">\n    <h2>\n      {{ projectsService.currentProject?.project_name }} Team Members\n    </h2>\n  </div>\n</div>\n<hr/>\n<div class=\"container-team-members\">\n<!--Implement ngFor to create each User-->\n  <user\n    *ngFor=\"let user of projectsService.usersOnProject\"\n    [user]=\"user\">\n  </user>\n</div>\n\n<div class=\"header\">\n  <div class=\"h2-header\">\n    <!--Drag Containers <input type=\"checkbox\" [(ngModel)]=\"dragOperation\"/>-->\n    <h2>\n      Project Board\n    </h2>\n    <button md-icon-button (click)=\"addNewPhase()\">\n      <i class=\"material-icons\">library_add</i>\n    </button>\n    <md-progress-bar\n        class=\"example-margin\"\n        [color]=\"blue\"\n        [mode]=\"determinate\"\n        [value]=\"projectsService.progress\"\n        [bufferValue]=\"bufferValue\">\n    </md-progress-bar>\n    <h2 class=\"percent\">{{ projectsService.progress + '%' }}</h2>\n  </div>\n</div>\n<hr/>\n<div class=\"container-phases\" >\n<!--Implement ngFor to create Phases-->\n  <div class=\"phases\" dnd-sortable-container [sortableData]=\"projectsService.phases\">\n    <div *ngFor=\"let phase of projectsService.phases; let i = index\" dnd-sortable [sortableIndex]=\"i\"\n      (onDropSuccess)=\"updatePhaseOrder()\" [dragEnabled]=\"dragOperation\">\n      <phases\n        [phase]=\"phase\">\n      </phases>\n    <div>\n  </div>\n</div>"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"teamMenu === true; else projectMenu\">\n  <div class=\"current-team-members\">\n    <span>{{ user.full_name }}</span>\n    <i class=\"material-icons md-48\" >account_circle</i>\n    <span class=\"status\">Status:</span>\n    <span class=\"status\">{{ user.user_status }}</span>\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n      <i class=\"material-icons\">more_horiz</i>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n        <button md-menu-item disableRipple>\n          <div class=\"menu-item\">\n            <i class=\"material-icons\">navigate_next</i>\n            <span>Show User Projects</span>\n          </div>\n        </button>\n        <button md-menu-item disableRipple (click)=\"removeFromTeam(user.id)\">\n          <div class=\"menu-item\">\n            <i class=\"material-icons\">delete_forever</i>\n            <span>Remove From Team</span>\n          </div>\n        </button>\n    </md-menu>\n  </div>\n</div>\n\n<ng-template #projectMenu>\n  <div class=\"current-team-members projectMenu\">\n    <span>{{ user.full_name }}</span>\n    <i class=\"material-icons md-48\" >account_circle</i>\n    <span class=\"status\">Status:</span>\n    <span class=\"status\">{{ user.user_status }}</span>\n  </div>\n<ng-template>"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<p>\n  user-details works!\n</p>\n"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<p>\n  team-members works!\n</p>\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2 class=\"h2-header\">Current Projects\n    <button md-icon-button (click)=\"addNewProject()\">\n     <i class=\"material-icons\">library_add</i>\n    </button>\n  </h2>\n<!--Render Dropdown Menu-->\n  <md-select placeHolder=\"Select a Team\" [(ngModel)]=\"value\" (change)=\"setTeamProjects($event)\">\n    <md-option value=\"selected\" selected=\"selected\">--Select a Team--</md-option>\n    <md-option value=\"all\">--All--</md-option>\n    <md-option\n      *ngFor=\"let team of teamService.userTeams\"\n      [value]=\"team\"\n      >\n      {{ team.team_name }}\n    </md-option>\n  </md-select>\n</div>\n<hr/>\n\n<div class=\"container-project\" dnd-sortable-container [sortableData]=\"projectsService.projects\">\n<!--Implement ngFor to create Projects-->\n  <div *ngFor=\"let project of projectsService.projects; let i = index\" dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"updateProjectOrder()\">\n    <div *ngIf=\"!project.complete\" class=\"current-project\">\n      <img src=\"http://dia.tv/wp-content/uploads/2014/08/Project_logo_02.png\" (click)=\"showDetails()\" [routerLink]=\"['/projects', project.id]\">\n      <div>\n        <div class=\"project-header\">\n          <inline-editor type=\"text\" [(ngModel)]=\"project.project_name\" (onSave)=\"editProjectName(project.id, $event)\" name=\"projectText\" size=\"15\"  min=\"1\" max=\"50\" (onError)=\"handleError()\" placeholder=\"Project Name\"></inline-editor>\n          <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n            <i class=\"material-icons\">more_vert</i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <md-menu #menu=\"mdMenu\">\n      <button md-menu-item (click)=\"deleteProject(project.id, project.project_name)\">\n        <div class=\"menu-item\">\n          <i class=\"material-icons\">delete_forever</i>\n          <span>Delete Project</span>\n        </div>\n      </button>\n      <button md-menu-item (click)=\"toggleCompleteProject(project.id, project.project_name, project.complete)\">\n        <div class=\"menu-item\">\n          <i class=\"material-icons\">done_all</i>\n          <span>Project Finished</span>\n        </div>\n      </button>\n    </md-menu>\n  </div>\n</div>\n\n<h2>Past Projects</h2>\n<hr/>\n<div class=\"container-past-project\">\n<!--Implement ngFor to create Projects-->\n  <div *ngFor=\"let project of projectsService.projects\">\n    <div *ngIf=\"project.complete\" class=\"past-project\">\n      <img src=\"http://dia.tv/wp-content/uploads/2014/08/Project_logo_02.png\" [routerLink]=\"['/projects', project.id]\">\n      <div class=\"project-header\">\n        <div>\n          {{ project.project_name }}\n        </div>\n        <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n          <i class=\"material-icons\">more_vert</i>\n        </button>\n      </div>\n       <md-menu #menu=\"mdMenu\">\n        <button md-menu-item (click)=\"deleteProject(project.id, project.project_name)\">\n          <div class=\"menu-item\">\n            <i class=\"material-icons\">delete_forever</i>\n            <span>Delete Project</span>\n          </div>\n        </button>\n        <button md-menu-item (click)=\"toggleCompleteProject(project.id, project.project_name, project.complete)\">\n          <div class=\"menu-item\">\n            <i class=\"material-icons\">done_all</i>\n            <span>Revive Project</span>\n          </div>\n        </button>\n      </md-menu>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2 class=\"h2-header\">\n    {{ teamService.selectedTeamInfo?.team_name }}\n  </h2>\n  <button md-icon-button (click)=\"renderTeamAdd()\">\n     <i class=\"material-icons\">library_add</i>\n  </button>\n  <div *ngIf=\"render\">\n    <input #search id=\"search-box\" (keyup)=\"searchMembers(search.value)\" placeholder=\"Enter Name To Add\" value=\"term\" [(ngModel)]=\"term\">\n    <div class=\"search-results\">\n      <div\n        *ngFor=\"let user of users | async\"\n        (click)=\"addTeamUser(user)\"\n        class=\"member-result\">\n        {{ user.full_name }}\n      </div>\n    </div>\n  </div>\n</div>\n<hr/>\n\n<div class=\"container-team-users\">\n    <user\n      *ngFor=\"let user of teamService.selectedTeamUserInfo\"\n      [user]=\"user\"\n      [teamMenu]=\"true\"\n      [removeFromTeam]=\"removeFromTeam()\">\n    </user>\n</div>"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2 class=\"h2-header\">My Teams\n    <button md-icon-button (click)=\"addNewTeam(nameField)\">\n      <i class=\"material-icons\">library_add</i>\n    </button>\n    <input [(ngModel)]=\"nameField\" value=\"nameField\" placeholder=\"Enter New Team Name\">\n  </h2>\n<!--Render Dropdown Menu-->\n</div>\n<hr/>\n\n<div class=\"container-team\">\n<!--Implement ngFor to create Teams-->\n  <div\n    *ngFor=\"let team of teamService.userTeams\"\n    [routerLink]=\"['/teams', team.id]\"\n    class=\"team\">\n    {{ team.team_name }}\n    <button md-icon-button (click)=\"deleteTeam(team.id, team.team_name); $event.stopPropagation()\" >\n      <i class=\"material-icons\">delete</i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div class=\"info\">\n  <div class=\"user-name\">{{ userService.userProfile?.full_name }}</div>\n  <div class=\"email\">{{ userService.userProfile?.email }}</div>\n  <i class=\"material-icons md-48\">account_circle</i>\n  <a routerLink=\"profile\">Account Settings</a>\n</div>"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import Observable Operators


var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-type': 'application/JSON' });
        this.baseUrl = 'http://localhost:8080';
        this.userTeams = [];
        // Current Team Information
        this.currentTeam = { id: 1, team_name: 'Tiny Task' }; // Mock
        this.selectedTeamUserInfo = [];
    }
    TeamService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    TeamService.prototype.setCurrentTeam = function (team) {
        this.currentTeam = team;
    };
    // Get Information
    TeamService.prototype.getUserTeams = function (userId) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/teams/users/" + userId)
            .toPromise()
            .then(function (response) {
            _this.userTeams = response.json();
        })
            .catch(this.handleError);
    };
    TeamService.prototype.getTeamInfo = function (teamId) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/teams/" + teamId)
            .toPromise()
            .then(function (response) {
            _this.selectedTeamInfo = response.json().team_info[0];
            _this.selectedTeamUserInfo = response.json().user_info;
        })
            .catch(this.handleError);
    };
    TeamService.prototype.findAllUsers = function (user) {
        return this.http.get(this.baseUrl + "/api/users/search/" + user)
            .map(function (response) { return response.json(); });
    };
    // Post Information
    TeamService.prototype.makeNewTeam = function (userId, teamName) {
        var _this = this;
        this.http.post(this.baseUrl + "/api/teams", JSON.stringify({ user_id: userId, team_name: teamName }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.userTeams.push(response.json().team_info);
        })
            .catch(this.handleError);
    };
    // Edit Information
    TeamService.prototype.addTeamMember = function (teamId, userId) {
        var _this = this;
        this.http.put(this.baseUrl + "/api/teams/" + teamId, JSON.stringify({ user_id: userId, remove: false }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.selectedTeamUserInfo = response.json().user_info;
        })
            .catch(this.handleError);
    };
    // Delete Information
    TeamService.prototype.deleteTeam = function (teamId) {
        var _this = this;
        this.http.delete(this.baseUrl + "/api/teams/" + teamId, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var indexTeamToDelete = _this.userTeams.findIndex(function (team) { return team.id === teamId; });
            _this.userTeams.splice(indexTeamToDelete, 1);
        })
            .catch(this.handleError);
    };
    TeamService.prototype.removeFromTeam = function (teamId, userId) {
        var _this = this;
        this.http.put(this.baseUrl + "/api/teams/" + teamId, JSON.stringify({ user_id: userId, remove: true }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var indexMemberToDelete = _this.selectedTeamUserInfo.findIndex(function (member) { return member.id === userId; });
            _this.selectedTeamUserInfo.splice(indexMemberToDelete, 1);
        })
            .catch(this.handleError);
    };
    return TeamService;
}());
TeamService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], TeamService);

var _a;
//# sourceMappingURL=team.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import ReactiveJS toPromise

var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userUpdate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/JSON' });
        this.baseUrl = 'http://localhost:8080';
    }
    UserService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    UserService.prototype.getUserInfo = function (token) {
        var _this = this;
        this.http.get(this.baseUrl + "/api/users/" + token)
            .toPromise()
            .then(function (response) {
            _this.userProfile = response.json().user_profile;
            _this.userId = response.json().user_profile.id;
            _this.userUpdate.emit(response.json());
        })
            .catch(this.handleError);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js___default.a.WebAuth({
            clientID: 'WCqZCPIb7LQzup2tz-RKh-jurybqDAbL',
            domain: 'tinytask.auth0.com',
            responseType: 'token id_token',
            audience: 'https://tinytask.auth0.com/userinfo',
            redirectUri: 'http://localhost:4200/callback',
            scope: 'openid profile',
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavService = (function () {
    function NavService() {
        this.currentPage = 'projects';
    }
    NavService.prototype.changeToDetailsPage = function () {
        this.currentPage = 'details';
    };
    NavService.prototype.changeToProjectsPage = function () {
        this.currentPage = 'projects';
    };
    return NavService;
}());
NavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NavService);

//# sourceMappingURL=nav.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-callback',
        template: __webpack_require__(272),
        styles: [__webpack_require__(247)]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(273),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(274),
        styles: [__webpack_require__(249)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_service_projects_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_nav_service_nav_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_team_service_team_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectDetailsComponent = (function () {
    function ProjectDetailsComponent(projectsService, userService, navService, teamService, route, location) {
        this.projectsService = projectsService;
        this.userService = userService;
        this.navService = navService;
        this.teamService = teamService;
        this.route = route;
        this.location = location;
        this.dragOperation = true;
    }
    ProjectDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Render Navigation Bar
        this.navService.changeToDetailsPage();
        // Get Current Project Id
        this.route.params.subscribe(function (params) { return _this.selectedProjectId = +params['id']; });
        // Get Project Info
        this.route.params.subscribe(function (params) { return _this.projectsService.getProject(+params['id']); });
    };
    ProjectDetailsComponent.prototype.addNewPhase = function () {
        this.projectsService.createPhase(this.selectedProjectId);
    };
    ProjectDetailsComponent.prototype.updatePhaseOrder = function (projectId) {
        var _this = this;
        var phaseOrder = '';
        this.projectsService.phases.forEach(function (phase, index) {
            if (index === _this.projectsService.phases.length - 1) {
                phaseOrder += phase.id;
            }
            else {
                phaseOrder += phase.id + ' ';
            }
        });
        this.projectsService.updatePhaseOrder(this.selectedProjectId, phaseOrder);
    };
    return ProjectDetailsComponent;
}());
ProjectDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-project-details',
        template: __webpack_require__(277),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_projects_service_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_projects_service_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_nav_service_nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_nav_service_nav_service__["a" /* NavService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_team_service_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_team_service_team_service__["a" /* TeamService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _f || Object])
], ProjectDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=project-details.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_team_service_team_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nav_service_nav_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsComponent = (function () {
    function ProjectsComponent(projectsService, userService, teamService, navService) {
        this.projectsService = projectsService;
        this.userService = userService;
        this.teamService = teamService;
        this.navService = navService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Render Navigation Bar
        this.navService.changeToProjectsPage();
        this.projectsService.projects = [];
        if (!this.userService.userId) {
            this.userService.userUpdate.subscribe(function (userData) {
                // Team Rendering
                _this.teamService.getUserTeams(userData.user_profile.id);
                // Project Rendering
                _this.projectsService.projectIds = userData.project_id;
                _this.projectsService.projectIds.forEach(function (projectId) {
                    _this.projectsService.getProject(projectId);
                });
            });
        }
        else {
            this.teamService.getUserTeams(this.userService.userId);
            this.projectsService.projectIds.forEach(function (projectId) {
                _this.projectsService.getProject(projectId);
            });
        }
    };
    ProjectsComponent.prototype.showDetails = function () {
        this.navService.changeToDetailsPage();
    };
    ProjectsComponent.prototype.addNewProject = function () {
        var teamId = this.teamService.currentTeam.id;
        var userId = this.userService.userId;
        this.projectsService.createProject(teamId, userId);
    };
    ProjectsComponent.prototype.deleteProject = function (projectId, projectName) {
        if (confirm("Are you sure you want to delete \"" + projectName + "\"?")) {
            this.projectsService.deleteProject(projectId);
        }
    };
    ProjectsComponent.prototype.setTeamProjects = function (event) {
        if (this.value !== 'selected' && this.value !== 'all') {
            this.teamService.setCurrentTeam(this.value);
            this.projectsService.getTeamProjects(this.value.id);
        }
        else {
            this.projectsService.getUserProjects(this.userService.userId);
        }
    };
    ProjectsComponent.prototype.editProjectName = function (projectId, newName) {
        this.projectsService.editProjectName(projectId, newName);
    };
    ProjectsComponent.prototype.updateProjectOrder = function ($event) {
        console.log(this.projectsService.projects);
    };
    ProjectsComponent.prototype.toggleCompleteProject = function (projectId, projectName, projectCompleted) {
        this.projectsService.editProjectCompleteStatus(projectId, projectName, !projectCompleted);
    };
    ProjectsComponent.prototype.handleError = function () {
        alert("50 Character Limit Exceeded");
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'projects',
        template: __webpack_require__(281),
        styles: [__webpack_require__(256)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projects_service_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_team_service_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_team_service_team_service__["a" /* TeamService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_nav_service_nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nav_service_nav_service__["a" /* NavService */]) === "function" && _d || Object])
], ProjectsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_team_service_team_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Import Observable Class Extensions

// Import Observable Operators




var TeamDetailsComponent = (function () {
    function TeamDetailsComponent(teamService, route, location) {
        this.teamService = teamService;
        this.route = route;
        this.location = location;
        this.render = false;
        this.memberSearchTerms = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    TeamDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Current Team Id
        this.route.params.subscribe(function (params) { return _this.teamId = +params['id']; });
        // Get Team Info
        this.route.params.subscribe(function (params) { return _this.teamService.getTeamInfo(+params['id']); });
        // Set Up Member Search Observable
        this.users = this.memberSearchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.teamService.findAllUsers(term) : __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.error(error);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
        });
    };
    TeamDetailsComponent.prototype.renderTeamAdd = function () {
        this.render = !this.render;
    };
    TeamDetailsComponent.prototype.removeFromTeam = function () {
        var _this = this;
        return function (userId) {
            return _this.teamService.removeFromTeam(_this.teamId, userId);
        };
    };
    TeamDetailsComponent.prototype.searchMembers = function (name) {
        this.memberSearchTerms.next(name);
    };
    TeamDetailsComponent.prototype.addTeamUser = function (user) {
        this.term = '';
        this.memberSearchTerms.next('');
        if (this.teamService.selectedTeamUserInfo.findIndex(function (selected) { return selected.id === user.id; }) === -1) {
            this.teamService.addTeamMember(this.teamId, user.id);
        }
    };
    return TeamDetailsComponent;
}());
TeamDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-team-details',
        template: __webpack_require__(282),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__services_team_service_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_team_service_team_service__["a" /* TeamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _c || Object])
], TeamDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=team-details.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service_team_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsComponent = (function () {
    function TeamsComponent(teamService, userService) {
        this.teamService = teamService;
        this.userService = userService;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userUpdate.subscribe(function (userData) {
            // Team Rendering
            _this.teamService.getUserTeams(userData.user_profile.id);
        });
    };
    TeamsComponent.prototype.addNewTeam = function (teamName) {
        if (teamName !== '' && typeof teamName !== 'undefined') {
            this.teamService.makeNewTeam(this.userService.userId, teamName);
            this.nameField = '';
        }
    };
    TeamsComponent.prototype.deleteTeam = function (teamId, teamName) {
        if (confirm("Are you sure you want to delete \"" + teamName + "\"?")) {
            this.teamService.deleteTeam(teamId);
        }
    };
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-teams',
        template: __webpack_require__(283),
        styles: [__webpack_require__(258)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_team_service_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_team_service_team_service__["a" /* TeamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */]) === "function" && _b || Object])
], TeamsComponent);

var _a, _b;
//# sourceMappingURL=teams.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'user-profile',
        template: __webpack_require__(285),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.bundle.js.map
