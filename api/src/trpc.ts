import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();

const courses = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    name: 'Node.js Basics',
    description: 'Введение в Node.js, работа с модулями и npm',
    authorId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-05T12:00:00Z'),
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    name: 'React Fundamentals',
    description: 'Основы React: компоненты, состояние и хуки',
    authorId: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    createdAt: new Date('2025-02-01T10:00:00Z'),
    updatedAt: new Date('2025-02-03T15:00:00Z'),
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    name: 'NestJS Advanced',
    description: 'Глубокое погружение в NestJS: модули, DI, пайпы и гард',
    authorId: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
    createdAt: new Date('2025-03-01T09:30:00Z'),
    updatedAt: new Date('2025-03-02T11:45:00Z'),
  },
];

const trpcRouter = trpc.router({
  getCourses: trpc.procedure.query(() => courses),
});

export type TrpcRouter = typeof trpcRouter;

export default trpcRouter;
