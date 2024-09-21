import { ref, reactive, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { AddressList, NavBar } from "vant";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";
import { AddressInfo } from "./address";
import { useMainStore } from "@/pinia";
import "vant/es/nav-bar/style";
import "vant/es/address-list/style";

export default defineComponent(() => {
  const router = useRouter();
  const mainStore = useMainStore();
  const chosenAddressId = ref();
  const localAddress = getLocalStorage("addressList");

  const list: Array<AddressInfo> = reactive(
    localAddress || [
      {
        id: 1,
        name: "Mike",
        tel: "343345678",
        address: "Gage Cres 1234",
        ads: "abc road 123",
        city: ["Ontario", "Ottawa", "Nepean"],
        isDefault: true,
      },
      {
        id: 2,
        name: "Alice",
        tel: "13112345678",
        address: "Gage Cres 4321",
        ads: "abc road 12",
        city: ["Ontario", "Toronto", "拱墅区"],
        isDefault: false,
      },
      {
        id: 3,
        name: "Tom",
        tel: "13212345678",
        address: "Gage Cres 123",
        ads: "abc road 15 ",
        city: ["Ontario", "Ottawa", "Barrheaven"],
        isDefault: false,
      },
    ]
  );

  if (!localAddress) setLocalStorage("addressList", list);

  const onAdd = () => {
    router.push("/address/edit");
  };
  const onEdit = (item: any) => {
    mainStore.selectAddress = item;
    router.push("/address/edit");
  };

  const onClickLeft = () => {
    router.back();
  };

  return () => {
    return (
      <div class="pd-nav" style="background:#f7f8fa;min-height:100vh">
        <NavBar
          fixed
          title="Address manage"
          left-text="back"
          left-arrow
          onClickLeft={onClickLeft}
        />
        <AddressList
          v-model={chosenAddressId.value}
          list={list}
          defaultTagText="defalut"
          onAdd={onAdd}
          onEdit={onEdit}
        />
      </div>
    );
  };
});
