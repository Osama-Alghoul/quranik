export const info = {
  email: "Info@quranik.org",
  phone: "+970567439584",
  whatsapp: (message?: string) => {
    const phone = "970567439584";
    const baseUrl = `https://wa.me/${phone}`;
    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
  },
};

