import { S3Client, GetObjectCommand, DeleteObjectCommand, ListObjectsCommand, PutObjectCommand, CopyObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

export class s3wrap {
    constructor(param) {
        this.client = new S3Client({
            region: param.region,
            endpoint: param.endpoint,
            credentials: {
                accessKeyId: param.accessKeyId,
                secretAccessKey: param.secretAccessKey
            }
        });
    }

    async listObject(bucket, prefix) {
        const response = await this.client.send(
            new ListObjectsCommand({
                Bucket: bucket,
                Prefix: prefix
            })
        );
        return response;
    }

    async getObject(bucket, key, type) {
        const response = await this.client.send(
            new GetObjectCommand({
                Bucket: bucket,
                Key: key
            })
        );
 
        switch(type) {
            case "json":
                const text = await new Response(response.Body).text();
                return JSON.parse(text);
                break;
            case "blob":
                const blob = await new Response(response.Body).blob();
                return blob;
            case "response":
                return response;
        }
    }

    async putObject(bucket, key, buffer) {
        await this.client.send(
            new PutObjectCommand({
                Body: buffer,
                Bucket: bucket,
                Key: key
            })
        );
    }

    async copyObject(bucket, key1, key2) {
        await this.client.send(
            new CopyObjectCommand({
                CopySource: encodeURI(bucket + "/" + key1),
                Bucket: bucket,
                Key: key2
            })
        );
    }

    async deleteObject(bucket, key) {
        await this.client.send(
            new DeleteObjectCommand({
                Bucket: bucket,
                Key: key
            })
        );
        return "OK";
    }
};
export default s3wrap;
