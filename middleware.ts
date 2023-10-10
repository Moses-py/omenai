import { stackMiddlewares } from "./middlewares/stackMiddlewares";
import { withAuthorization } from "./middlewares/withAuthorization";

export default stackMiddlewares([withAuthorization]);
