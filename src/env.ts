// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Env {
    AUTH_SUPER_TOKEN: string;
    GITHUB_TOKEN: string;
    SLACK_ADMIN_CHANNEL_WEBHOOK?: string;
    SLACK_NOTIFICATIONS_CHANNEL_WEBHOOK?: string;

    SERVICE_CONFIG: string;

    // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
    // MY_KV_NAMESPACE: KVNamespace;
    //
    // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
    // MY_DURABLE_OBJECT: DurableObjectNamespace;
    //
    // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
    // MY_BUCKET: R2Bucket;
    //
    // Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
    // MY_SERVICE: Fetcher;
    //
    // Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
    // MY_QUEUE: Queue;
    //
    // Example binding to a D1 Database. Learn more at https://developers.cloudflare.com/workers/platform/bindings/#d1-database-bindings
    DB: D1Database;
}
