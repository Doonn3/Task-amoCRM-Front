import { ref } from 'vue';

export function useScrollDown<T extends HTMLElement>() {
  const refElement = ref<T>();

  const toScroll = () => {
    const container = refElement.value;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  return {
    refElement,
    toScroll,
  };
}
