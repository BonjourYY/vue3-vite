// 引入组件挂载库
import { render } from '@testing-library/vue';
import componentB from '@/components/componentB.vue';
test('it should work', () => {
  const { getByText } = render(componentB, {
    props: {
      message: 'fanqinyang',
    },
  });

  // 断言输出
  getByText('fanqinyang');
});
