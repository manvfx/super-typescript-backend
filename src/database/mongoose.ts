import monoogse from "mongoose";

const startMongoose = async () => {
  try {
    await monoogse.connect(
      `mongodb://${process.env.MONGO_HOST ?? ""}:${
        process.env.MONGO_PORT ?? ""
      }/${process.env.MONGO_DB}`
    );
    console.info("\x1b[34m", `Mongodb Database connected...`);
  } catch (error) {
    console.log(error);
  }
};

export default startMongoose;
