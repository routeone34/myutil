import { Open } from "unzipper";

export const uzwrap = {
    async getZipDirFromLocalFile(filename) {
        const dir = await Open.file(filename);
        return dir;
    },
    async getZipDir(s3wrap, bucket, key) {
        const dir = await Open.s3_v3(
            s3wrap.client,
            {
                Bucket: bucket,
                Key: key
            }
        );
        return dir;
    }
}

export default uzwrap;
