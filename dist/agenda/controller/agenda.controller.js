"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendasController = void 0;
const common_1 = require("@nestjs/common");
const agenda_service_1 = require("../service/agenda.service");
let AgendasController = class AgendasController {
    constructor(agendaService) {
        this.agendaService = agendaService;
    }
    async getAgendas() {
        const medicos = await this.agendaService.getMedicos();
        return { medicos };
    }
};
exports.AgendasController = AgendasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "getAgendas", null);
exports.AgendasController = AgendasController = __decorate([
    (0, common_1.Controller)('agendas'),
    __metadata("design:paramtypes", [agenda_service_1.AgendaService])
], AgendasController);
