// --------------- LIBRARIES ---------------

export default {
    getRandomPosts: () => {
        return Array(10)
            .fill('')
            .map(() => {
                return {
                    title: 'faker.commerce.productName()',
                    body: 'faker.commerce.productDescription()',
                };
            });
    },
};
