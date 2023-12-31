import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const PROTO_FILE = './proto/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_FILE, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition);

const client = new userProto.UserService(
    "localhost:3043",
    grpc.credentials.createInsecure()
);

export default client;
