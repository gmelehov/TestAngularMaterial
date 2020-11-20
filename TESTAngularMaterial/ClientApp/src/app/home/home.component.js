"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        //items = [{ key: 'key1', val: 'val1' }, { key: 'key2', val: 'val2' }, { key: 'key3', val: 'val3' }];
        this.items = ['Menu item 1', 'Menu item 2', 'Menu item 3'];
        this._data = [
            { "id": 1, "firstName": "Stephanie", "lastName": "Owens", "email": "sowens0@cmu.edu", "gender": "Female" }, { "id": 2, "firstName": "Stephen", "lastName": "Torres", "email": "storres1@cbc.ca", "gender": "Male" }, { "id": 3, "firstName": "Lillian", "lastName": "West", "email": "lwest2@jalbum.net", "gender": "Female" }, { "id": 4, "firstName": "Larry", "lastName": "Hill", "email": "lhill3@phpbb.com", "gender": "Male" }, { "id": 5, "firstName": "Patrick", "lastName": "Duncan", "email": "pduncan4@prlog.org", "gender": "Male" }, { "id": 6, "firstName": "Steven", "lastName": "Nguyen", "email": "snguyen5@meetup.com", "gender": "Male" }, { "id": 7, "firstName": "Eugene", "lastName": "Garrett", "email": "egarrett6@psu.edu", "gender": "Male" }, { "id": 8, "firstName": "Juan", "lastName": "Wood", "email": "jwood7@elpais.com", "gender": "Male" }, { "id": 9, "firstName": "Harold", "lastName": "Little", "email": "hlittle8@walmart.com", "gender": "Male" }, { "id": 10, "firstName": "Linda", "lastName": "Cunningham", "email": "lcunningham9@storify.com", "gender": "Female" }, { "id": 11, "firstName": "Mary", "lastName": "Clark", "email": "mclarka@jalbum.net", "gender": "Female" }, { "id": 12, "firstName": "Larry", "lastName": "Barnes", "email": "lbarnesb@usda.gov", "gender": "Male" }, { "id": 13, "firstName": "Kathy", "lastName": "Kelley", "email": "kkelleyc@delicious.com", "gender": "Female" }, { "id": 14, "firstName": "Johnny", "lastName": "Morris", "email": "jmorrisd@github.com", "gender": "Male" }, { "id": 15, "firstName": "Louis", "lastName": "Sanchez", "email": "lsancheze@usda.gov", "gender": "Male" }, { "id": 16, "firstName": "Arthur", "lastName": "Carter", "email": "acarterf@merriam-webster.com", "gender": "Male" }, { "id": 17, "firstName": "Mildred", "lastName": "Cole", "email": "mcoleg@deviantart.com", "gender": "Female" }, { "id": 18, "firstName": "Philip", "lastName": "Harvey", "email": "pharveyh@arstechnica.com", "gender": "Male" }, { "id": 19, "firstName": "Christine", "lastName": "Morales", "email": "cmoralesi@hibu.com", "gender": "Female" }, { "id": 20, "firstName": "Martha", "lastName": "Ford", "email": "mfordj@forbes.com", "gender": "Female" }, { "id": 21, "firstName": "Alice", "lastName": "Mccoy", "email": "amccoyk@google.cn", "gender": "Female" }, { "id": 22, "firstName": "Raymond", "lastName": "Chapman", "email": "rchapmanl@indiegogo.com", "gender": "Male" }, { "id": 23, "firstName": "Kathleen", "lastName": "Butler", "email": "kbutlerm@canalblog.com", "gender": "Female" }, { "id": 24, "firstName": "Diane", "lastName": "Baker", "email": "dbakern@unc.edu", "gender": "Female" }, { "id": 25, "firstName": "Ruth", "lastName": "Hill", "email": "rhillo@icq.com", "gender": "Female" }, { "id": 26, "firstName": "Margaret", "lastName": "Johnson", "email": "mjohnsonp@guardian.co.uk", "gender": "Female" }, { "id": 27, "firstName": "Virginia", "lastName": "Carpenter", "email": "vcarpenterq@altervista.org", "gender": "Female" }, { "id": 28, "firstName": "Lillian", "lastName": "Mitchell", "email": "lmitchellr@youtu.be", "gender": "Female" }, { "id": 29, "firstName": "Julie", "lastName": "Patterson", "email": "jpattersons@example.com", "gender": "Female" }, { "id": 30, "firstName": "Joyce", "lastName": "Garcia", "email": "jgarciat@who.int", "gender": "Female" }, { "id": 31, "firstName": "Charles", "lastName": "Gray", "email": "cgrayu@smugmug.com", "gender": "Male" }, { "id": 32, "firstName": "Anthony", "lastName": "Carr", "email": "acarrv@nih.gov", "gender": "Male" }, { "id": 33, "firstName": "Antonio", "lastName": "Hernandez", "email": "ahernandezw@fda.gov", "gender": "Male" }, { "id": 34, "firstName": "Nancy", "lastName": "Campbell", "email": "ncampbellx@canalblog.com", "gender": "Female" }, { "id": 35, "firstName": "Amanda", "lastName": "Wood", "email": "awoody@phoca.cz", "gender": "Female" }, { "id": 36, "firstName": "Gloria", "lastName": "Johnson", "email": "gjohnsonz@diigo.com", "gender": "Female" }, { "id": 37, "firstName": "Jacqueline", "lastName": "Webb", "email": "jwebb10@prnewswire.com", "gender": "Female" }, { "id": 38, "firstName": "Ralph", "lastName": "Meyer", "email": "rmeyer11@economist.com", "gender": "Male" }, { "id": 39, "firstName": "Fred", "lastName": "Foster", "email": "ffoster12@youku.com", "gender": "Male" }, { "id": 40, "firstName": "Carolyn", "lastName": "Daniels", "email": "cdaniels13@google.pl", "gender": "Female" }, { "id": 41, "firstName": "Jessica", "lastName": "Butler", "email": "jbutler14@bluehost.com", "gender": "Female" }, { "id": 42, "firstName": "Eugene", "lastName": "Perez", "email": "eperez15@theglobeandmail.com", "gender": "Male" }, { "id": 43, "firstName": "Brian", "lastName": "Walker", "email": "bwalker16@elegantthemes.com", "gender": "Male" }, { "id": 44, "firstName": "Walter", "lastName": "Holmes", "email": "wholmes17@hatena.ne.jp", "gender": "Male" },
            { "id": 45, "firstName": "Alice", "lastName": "Smith", "email": "asmith18@wikimedia.org", "gender": "Female" },
            { "id": 46, "firstName": "Antonio", "lastName": "Myers", "email": "amyers19@omniture.com", "gender": "Male" },
            { "id": 47, "firstName": "Joan", "lastName": "Banks", "email": "jbanks1a@trellian.com", "gender": "Female" },
            { "id": 48, "firstName": "Gary", "lastName": "Lee", "email": "glee1b@ed.gov", "gender": "Male" }
        ];
        this.selectedUsers = this._data.slice(1, 2);
        this.dataSource = function (o, p) { return _this._data.slice(o, o + p); };
    }
    HomeComponent.prototype.getSelectedUsersText = function () {
        if (this.selectedUsers.length < 1) {
            return "none";
        }
        return this.selectedUsers.map(function (i) { return i.firstName + " " + i.lastName; }).join(", ");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map