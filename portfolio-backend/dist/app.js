"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const project_route_1 = require("./app/modules/projects/project.route");
const blog_route_1 = require("./app/modules/blog/blog.route");
const contact_route_1 = require("./app/modules/contact/contact.route");
const app = (0, express_1.default)();
//json parser
app.use(express_1.default.json());
// cors
app.use((0, cors_1.default)({ origin: '*' }));
// application routes
app.use('/api/v1/project', project_route_1.ProjectRoutes);
app.use('/api/v1/blog', blog_route_1.BlogRoutes);
app.use('/api/v1/auth', blog_route_1.BlogRoutes);
app.use('/api/v1/contact', contact_route_1.ContactRoutes);
app.get('/', (req, res) => {
    res.send('Hurrah! Server is Working...');
});
exports.default = app;
