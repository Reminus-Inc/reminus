Landing page of Reminus, Inc.

* Next.js App Router
* PPR
* Server Actions + useActionState
* shadcn/ui
* Prisma
* MySQL (TiDB Serverless)
* Slack

## Getting Started

* Prepare a MySQL database and a Slack App.
* Create `.env` file and define `DATABASE_URL`, `SLACK_WEBHOOK_URL`, and `X_PIXEL_ID`
* `pnpm install && pnpm dlx prisma generate && pnpm dlx prisma migrate deploy`
* `pnpm dev` or `pnpm build && pnpm start`
