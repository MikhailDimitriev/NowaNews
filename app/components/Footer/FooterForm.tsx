import React from 'react';
import Button from "~/components/Button";

const FooterForm = () => {
  return (
    <form className="flex flex-col gap-4 items-start">
      <h3 className="font-semibold text-black text-[16px] p-1">Subscribe to news</h3>
      <label className="w-3/4" htmlFor={"subscription-input"}>Subscribe to receive the most interesting news via email!</label>
      <input
        className="p-3 border-2 border-gray-400 rounded-xl self-stretch"
        id="subscription-input"
        type="email"
        name="subscription-email"
        placeholder="Enter your email"
      />
      <Button
        type="submit"
        style={{
          width: "50%",
        }}
      >
        Subscribe
      </Button>
    </form>
  );
};

export default FooterForm;