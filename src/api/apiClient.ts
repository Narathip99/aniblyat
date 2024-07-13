import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RetryLink } from "apollo-link-retry";
import { HttpLink } from "@apollo/client/link/http";

const retryLink = new RetryLink({
  attempts: {
    retryIf: (error, _operation) => !!error && error.statusCode === 429,
    max: 3, // ลดจำนวนครั้งในการ retry ลง
  },
  delay: {
    initial: 1000, // เพิ่มเวลาหน่วงเริ่มต้น (1 วินาที)
    max: 5000, // กำหนดเวลาหน่วงสูงสุด (5 วินาที)
    jitter: true,
  },
});

const httpLink = new HttpLink({
  uri: "https://graphql.anilist.co",
});

const apiClient = new ApolloClient({
  link: retryLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Page: {
            keyArgs: false, // Disable key arguments to cache all queries with Page
            merge(existing = {}, incoming) {
              return { ...existing, ...incoming };
            },
          },
        },
      },
    },
  }),
});

export default apiClient;
