import React, { useEffect, useReducer, useState } from 'react';
import {
    Keyboard,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput, Image,
    useColorScheme, Dimensions,
    View, TouchableOpacity, Animated, Button
} from 'react-native';

import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import { store } from '../../MST/store'
import { newsStore } from '../../MST/newsStore';
import { HEIGHT, WIDTH } from '../../Screens/Functions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import { ALVINA } from '../../Constants/index'

export default function NewsLogin() {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const length = React.useRef(new Animated.Value(0)).current
    const navigation = useNavigation()
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("Keyboard Shown");
            opening()
            console.log("Keyboard Shown")
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("Keyboard Hidden");
            closing()
            console.log("Keyboard  Hidden")
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    function closing() {
        Animated.timing(length, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    function opening() {
        Animated.timing(length, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    }
    function signIn() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'main' }]
        });
        newsStore.signUp()
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar backgroundColor='transparent' translucent />
            <Animated.View style={{
                height: length.interpolate({
                    inputRange: [0, 1],
                    outputRange: [HEIGHT(410), HEIGHT(200)]
                })
            }}>
                <Animated.Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAABj1BMVEUArO4VHSD////tvan9ZETm5+kAqO0Aqu4AAADy8vIAp+39Xz0Are8As/j+lIEArvP/YTmQjqy1trvKy879WDP9nYwVGhv+sKKrra7+2tMWAAAFl8/9YD8HBwnU9P/s7e/zvqaV0fCw2/AUFxPOpZTX19qPPzEAGR8UM0BSU1UWBgCZmZrh7PHy0sPExch4Y1s9uO7/jHaByPDz5uSl1PD2wbik4Pw8gKHj+///fGGsSzfY6vLnuKXy08Q9QkN6fX5kw/LD6PnGeXsAEBX9TyIAAA4mpd1ymMb9bU97Oi8VEAf/Xi4Nb5iK0PQRTGUQWHcTP1MLgK9qbnD9fmWOtM/57efNurWhtsfXu7E6ruX6zboUJi6Hs9ALfasIj8VRv/FhpMcnLTEAGyqkiaOuhJdWns+VPCaEkbPlbVqzgpDQb2zodWX9p5jacWpjMippKBtpTUpwjJvCfIOsbmT9Rg9qstqohnjprpqOdGpDU15NQT25lIWlmJQ3MzLXWT63QSWkZ1mRZW9/maZbhJtFSUsJqgN7AAAY2klEQVR4nO2di1/byLXHZRk0tjxGXmLMGkywRXI3QEiEISoUEqwaqOvgEJLlYefhTXfTbFvabnubNE1276PdP/yeGb0tjSy//flc/5IAwo6lr86Zc86MZiSOm2iiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaa6P+ZcBIbX1qFBEFw/6b1F7CNBnhofRFePH2Nkyenix5CVNJkTREBAhuvKZqsio53iLIsF8adMHmnmqlWV9ZOk+7fC4LI8Tx/Fxg0uUl/hZo8v+MAFArwBmWIx9qFsLT4IlOOxcqZF4u2l4LRlBpwEYCiaPklAdxzANbhZZdFx094cXEtEzu4N3sQy2Rev6aESCRw201ogaIMCLbrtgCKe2BQwfuh46Tki7VM+TYcJ387llm4k4S4omxrapMzYgcCQM1CcgMKNXixOd4tEC8uRGKzfBGJKv9lLPNCxNtaQRHtgxZKxEnNbTcghpdkY2ts7Zg8q8aoiUQ1Hot9o8lKS9gXNYeTugDpK8absdwc03SBX1Xf8AU4/4LMR2LfYB9LOJzUCYiK8ELJfD+uacXWnDkWohYkfibejMeqr/ySPXHSEiJZH7ks6GqdnCAWtdr4WZG2wXVeQ4rMHyxFFjzJHjex4aRoW5YxAMZrmMDS37reisQSWHHcEJN3FjIQZUAQY9ae2rmeVi+oVihiM5iYFiS/V1XVsKtTBLHklxbR6Ljx4vFvV2KP1tcfxVbuwKZ+PCQFyGodviFktjZyiJaLCu70YQmJNU1pbYqC0qyp9fqIWiiS5KekkslknnJmxVmEwgw7Trp4k9AAq1Wq0RTo02Dh87BcEN2/2CvwGr+nFUZS8oBTKU8XXjx9emfB9E9FdiZvROoZzMtKCaQ05W2o3ABVLPE1hknEpsuImNfu8lAQqaMo6hAn12Cvr14nk4uvOCvbmd+hHSrFgqxCj6FWqxWL8KWwDZuFooJFdlJASC1YL4L1obmSiKR52uzAJSj0XGMJG1+cRyngoiyrtSYmnUJEIgz9QjYwtClZLnFMRvALbJYAaqGkqqUC/FNrAwVUPN0asSYznAYK0gIlQP4IiLxQAsMqDEbEaXoNgAr83k3dgqpV9wxE4k2t5VhEuejLB3SqRg69zeEAJZyGAvZ/n1igQQUKJA0AZR2w3tWht5cISUyxS2b98LCm+B0ZQkVtG3rx4T5ZEBVVLol+HySWiH8I2/zNPQvQN+72LrwjC827vIKxvQNoftjnsARc0EqoI08S4IwU/VwZwS4gsWhqQdOgf6kVNZ/E2Rcp/E3SMyf1iHkcsF+/Q+JUuelrjkBBAQPB2PvfwEkwEvfitZ0dde/u3QJfHFCuV3jNADSphJJPeEGooCndnWMEuc+vQSP4wBLxTXBRLX53ULWMDajquxBLPjkXQnuzDR7GUjKZlPxaEhJKfm2aEBYBjyT6nQG1QCeg7iOCDx+4k5+XOYWT3NnJ6enpq2O/IVRALBS9HyACoQIJZafkH7L7IgDEhThvVo/Ihw9Sol9f16nk4pO1anVlpVpde/raH9HvRyAUSNocaH8CYhxCuK4HUdT0tD8wn28vxyGcPFlYiRjKLJz6+qn9gTX745A2MNf037fiCdbQfNqZj5OerEUcqt7hAg+7KTv2OFxCrFm1tPHdqDkClTytRlyqPg02oeJoj9gvJQ1KonU6haJe3AtyO/cE+50tRFq0dpIM/C/OBqmwat7+S5StWF7SuzSMis0tHMm0AkbWgp0UdmBfCCgNth9hSyg6igmDz69iaxE+W/PwRaonUvD/qluNAaJYt0fcoVp9BcJnmP+WfLLiBczcaQOI6urg2x6WqMxdWgO4ikrPbgufxNKLr3wUQ6y3tw4NDEySdPzu2+++++Ktvk9RNfu8Rihttd8XLP3uP3z0u29Zbz92XI8aKN677x+niB4nfn8sQQVjDRM19SNw8+Fj/d0+mvIV692Pf22ZsFYanJdKb79PJRJpqkQq9a2EWjK82JKAAdAfpFOlfm0Nr0LUHhjfu8e5dGV+CyrQ8web6VzqD6aDIt1+jowxIEBqvUGNpFG+ed5UdjeR+qMRazDt9gq11l33G1AoEMJB8b19nEtkCdn83PWDc/hhM5H6GyVEtOWhpqc+67sFRY0OMpErACJTXbZRqZJLg3dmp/Q2eA2Ez3OP39IdGwHGUz31HZDDpCAVNCRoN5lijY+34XuXIv45n06kN6/ngHIXWmIi8UcrNYuyt7YAwERf5Iii9HNlced6hqFGd8WA9MdEBex3mJ6hLfBBOrEJuInHbyVEJ7xAoe39XHz8h18RsY4ljOgH/Oqt6+yhprizyzgX6fmuAIktwICVxIwZY9LpLB9Pp76ToOyFfi/2Le+NsofvXjvuSsYUAOYsB86BrI1Ed4DEQ7eAKgX7nK9sQoyZS4MJnyf+JGmidHwsbB+zuwJCoXtARk5wAiY2Z2aeJ3oF/DaV5vlr4qDz6VxiipoQfpGYSirJs4W1hZj3WrUt3DXfTUa3zwkIESGxO5foEfC71BSx2jzJDr/881+ePXv2F/jyw5//8uTJkwx07apnAb1VOrupK7GqFhswBwc1n05XNnO9WjBBLHhNvsCnxuNbiXQ8fj01hY6504Wl6lrggEO9Sz7myLzDgjPpB/z5THqmR8AvUulziJ2QHPjNdCXL6z9vJr5PQoQ5+evJyQl1UZz07e3QCRR9NKADsLIJgBANegV8+5icKBI6DVWIuyYSpJYRVMUIdPjsDkOPTK1Oh+djD7w4XJRYcD7VqwU5PEUS37VFuJnIkUCTeidxdorAxwuZdiq/CQ/I9noH4ObuTCWdmKn0FmQ46fcpwrabSl9n4+cPKgmy9TyR40iRbfV6F50jLU4sx6/L8d4N6GyDkCV2n889z/UICJk+VyGWSxv9wSxJGNAnhLrCOhAX4JJL3QAGhC1nmsjlnu8m7KzYJSCNo+CkfHZzKpXYJd2mbDpXIXOwilYy7i9g0BwRUqrlLCUcP3dZqhHCP6RSz+me9SOcT089PpZIkrOKjf66aFDeEXfmNhl60C0gxn9Kwfk51/ee3YUu/T3Sl8BFJ+BRrI3KYQEDx67Fu/E4+Zy4S7B9Y3a566FFjP8GvZ/07tz89eYU4FXe6sWL45LBYmx9eTpQy89iIQEDR3bFnZ9iMeBxn7z4+r3V2L0exk6lt98/TiVSKfrvW+wZpgXAL9sd90FIQE1kzKihErQ9UPzunks7O3uXl3u9rLrA0tvv/lSZqnz/t3eczyh0PwHvRfMXAZNgBJCo0CUmZOZbQf9BECSpx1nC0MNDskCHthXP9Q8A/M+5NvrhKBTgeT4azUfDHlXr+GVvUvSLSELBUykC4C/Z4w6QPEG/CRdkNqKg/MuQ3ibIfRxqE2rGohxvYyaANPW2jBnBdmUqvblJfg4JGKWAX7c5bnO2nHlM/QE0r656d04BE/N89nCGf3BIqtZd+PkBP3PI84e0BxIWUM6HAzRH0JRC/wb0BfblYxMQOi8UMJt9fH7+9yw/X+EfbPJb8/MJAsifP9zItgGshwPkVOMNqI/XtLHhmthnmNAEzG5SwNwhlORp2Jzj52b47N/JJZfffLVFDz7QjtpxOEBkVomC3D9AwxuQGgDIz1PA8+zhNX/Nn58/gO7jOZ9N0Da4T9tXNAiwGcaCpP2Zrws+o7JdyqytBZ+CwQSc58/1NpiFbv8W2TyHwhwI0zZg/jwAUAwBqJ9h00W9Ib1rQOOjBJ+CwQSce8BTwMThVDpOIg1BSx/G+YrDggGAsg1IpjT5U9JuKDZ81NGl6VWWM/g4vQl4XeGNIDMFjTB7SMcXs+C6IV20iUxA8eVVft8/G6ISqfLNBKj0bVlsQBC1AQFOTxPUYQ+3+N1cgqc9LAtwK8hDORPwPfmef0/WkngA6sAkmGG0rvbPgswgaiZ6cMRcBf6C9K2pSm4qtzuzm7YtuBHAB3swAS/otwuE6peX9VYEciQlc9d9C6MGoE+hZpVqpCRLQ48jTYsz+Jei3+lWygAM4CPD9dgJGL2CNgkCQzrt6EoNQY7VIaDGzBK02J5vo/sUMCiEkp4gMkq1Wb29CrMEeB+h91/bdqRx3M4T/QI0fAHV/AHbd5eOCGA2QLfJ1Hpq5vzlpW5JjlpyH11ROxpT4QWyfs2c3dU9IHIKto0JP75LbEMDGlM1fHVIRuqEKzcg5b2iIWdf4hbPdCZkt5SuAVGJLDLSVSjg4HgcFnC3tbthK0GuqcLxXrgA9Zgzq2/FFhaq5FodaSXIHJPtug2KrqODzOPt5nYMaF3q8ihXmZt7TpcV0kZnAf6btsQPH6ijxiKRiAnIKaaLal2mCfEuL6u6tvd0wMA8GALwH2y+54TgvYSxdJnP79/6fHAQ3djYeBj9SAE/fiZfbx05AU31AqgRyfD3biAglFQSAbzt1DLv3gbAcoXFNzVFOfYXz16d/vOncuzo6OhT4yEQRj/Dt4eN+7fIy5/7DigTAZ8J6F841WcvZusE8N6sQ9M879ycjfMHS2y+ykMyUpH/IVZdMYeKiQUb0Q8N8u0TDTUfyk7AptEGRVkUmEvb2gBuF0B2G/QNMujrfD6az/8rhIsGAKYbDy0bGcPg98kv7v8AgA8bb/YbjUb0oxPQCjIYDIH3+M7HRD1BBvsWfehhg7aPMMOGlQQriCauqQmjZcdAf+T+/TflI2h9jY8RimkBOtOEYF5h7bhTIdRUUxpPJt/5F31oYyMk4I+3ov94zggzuV0d8KODMFImG0ef7n86itCW+IMNKFjTOMldTKg6n8otWBJVjFoSDjJpccMCvH3DIQgyzs0bW9TQzESY0CuzfSegjVn+CC56i75GAXV/RFjESFANwJ76vXqV7bSgaG7UbcAb9xyCIOPYujC6glFWpkjM6a/f9xJGqB0/Gq9YFkSoxt+EHrIxU6UPqw3cNbyxgZRGexc9j9piNEI9EZLP8QUEOxK+cpVWMqS7hIp0ioomcrQRsqbVdAbo8HLr2iCtEoMBoQ9oAzLDjPH6Jz8TAh6kxshPq6cnZJ8kniNVILZTUL1Qj7NnnXQiV3pFBf36CGoPeB59uGERMou1xLX+BkemiES+Msg+3f/4+dZ+NB+lMzrokAUEAaTsKQLXLIi41pcLFK7xK3OsB720ARlt8IqkbPqmfD6gGDV8NPqTQQZgbwDsw61b0bx5evb1YEAHncjBiMaB9KlH2HRe1DLSPuR5C9AVRaetKEoBKeHXQdNk/8uIQx9i5chPAPb5VtSjfW+XG20Paqq6Eaovw7RBkuQaP8ZEXGF3l/77s0Gxvm+brEVXdjg3jdbHgV+3jDCq926CAUkQbZzzP34GH2V2CBO//4aF5QcomJV//4ZkWoS2cVhAnt+yowzLgKkvcFjAZo3EmAFcfHED0tFXowOuAzJ7ExfRhgX4nGHCx++kkIA02FlXzZq9rbarKz4yCPUlE1c2oGtSRZy3t60wCvofv6VLoP89lq7aAl7QXZKihYw+0Sqypoh2TdmxMYXCebxV50ZRpOd9Yd8GZCme37ASxX7Zb/HZV1+VT5Omt7OVnyW7NHs1zW2ivW2n3rdZpucF9PDF4yYgTYso2h6QN/NEPnrvF0s+hQpoBQBftgV8icwMDK2w6D35/I9nnREGAeqZsJ63AVvmHtnbD/PQN4/e+livSydVBuCTpPVZbMA69RxivSJCRe+h8eufOiMMBBShADTzfHCQmb24uoCz+3k/Hz048gfMPE1yQhsfzV9S3yRJQsVYAsAHLdpaX13tiDAQUCg0rSyhW3DZITChY2vLDCD5T1/5A95JWoV7oAGph0r/Wl1dXY/HW4aRD7MA2BEhAbTGxVoBSRffDKLtukuNhnmUH/07fJkXAIguggh1A9ICQ/qFDtiSatLZ9Z9XVzvxUgI4zQSE1iCaew8EbDjSBKNHG8mQ+X2BrXCf7pRcG2QD3viSKPx9SgNdlKxzFc0jahtFDSvs+3toJFIlgCjASfXJT4jcYw8rLEA91PjcySQAkBjvxrTDjvbgAISZUICNxgYZe8vnL76+471LgK41OkMT1dmA780QA80wEDDeGSBFWzYBp52AqNgMBQhtEMrtzz9wkvSUBVg1pqDW9xlG1HMEmbklyKaLplqDTDeADBet6w5jDibtf7jKBlzb3Don46Ic9r1NgBVFKSFmVGx5rPsMmWBhAm61KN4NoOP6wrTtonodI9QaroMInKdFADEz0Vt35ma1wzypX/Spd8gEZKgLF9X5lh1tENNSVGw93QHztCjgos+dLKiHnln9Vs9nGiKVNL29mh1FHbW9PaF6uT8uKhTpufTUj2w/JYBckhFlVuxFiFZ15BZ0lajbiAUb0HFt54ZdQ3XnotZ3M8gYH7LfchzsiVoUUPK7GQm5HYljjZ5/NoSuEp0NSErgQbio9d2RB31NyJwnQgE56anf3UgirlWkvk1wVqSroZHK2Ra0x7ji9ohXpxZkJnpEF6igVhNGG8u+ij+jgFioep104bV1byGl2VQuNnx0r1mUm4pAR5uCAO917KKQ5R3DgQ5AvWPmNeEnxsIQvZ3h12uthAuvrBAqk4qdsfAC/m5t0057f1102rVHZy1Ku9ZeE9Jr6ZGyx1BGIJEWM65csbJmLZKFPl7w6pLpraYT0HFYjhPRLxc1xibNkVGH3pBmteTpu5uREnNP7PuqrSw8PZbs/bXhm56mB9/XKGq6psdFDUQfH6U9BjYgFDSLp9W1Kmht7YnzznidAvbJRV0+4AIkc2N9AD8elT1aWak6bi2Ok9Li2cnJq0XOdeM/1CHgYKMokaIKPnn5832Pnp2enrhvKIBBUsvUzDECNFdQFBXR2wY9ykfrjFttuiXV4v45xk42NfIxfXVRX0Brvi2yxrYDAT1TWv35Xv973VcHtv598lri8GwgYPgJF6gke0XHypvWMlQUgu99qD0mTxaWjo6OlpgibXmpuvBK1I4/rf58gwnYwfUm5HPfHX1tQcE8TW1HM6P5y1BD6phj9DRa67rf1krS63/+6y5De/15dIxA7nZE7snvX/t3zscxu1KtqoL3QHxCfiKXK/o0SR1rIi7WMKv3ZuHlX4a8JEIAy28Yg24uwOB7WfZLQqlwF2o4OXAoM3/1deh7aQFg+Vn8dnvCleEAcqKsZ6aHTLyry3oHNxIHwCWIjO0tOCxAbCVfBuJVZ7dJpy56sDomFsScsO2oL/wQQyYH+yNJkFkK0QaHAAjVMk66u20exPxsh9dbqQXLjKlcwwXExy8Wlv463dIx3Wgh7HR6xxgFmSQZV4lF1oMQ2y9SbdX4BBn8Wr/PMiC2Di/YiFcdp1vaBtefjYEFk9YFhtibLxmInUYYboyCDHkEmCUv4tZGvosIw3VQqg0aMOka2czE3sy2Ijby+S6eyDIugN7jiD3yIF52MYFzXAB9roCVYz/fcyMuyw4ThitoEBoPQFcLdCCutiBOW2kQqyX2Y6NMOPLoqe0QSX7wgKxLmIB4w0m4bD/Vgzw2q6Ag/+U3+nOlVFktjYcF/Q1oID5zIsr2vFxEn8RLng1WJz1SweyakuehlQqqLBcx/G482iDzGrSBeNtE3BMxmRBh34OfPuasIJPHu9HlNDL5USXPdjMecTIWgAEGdCMulxCBw6rr4US63chSXBB9tpvgOAPjABhoQAPxgCCajy/FBfpY1/ZxFBfV49EDtjOgjrh0MG0PTZL42ZSDhmIRok8IbY5DkGlvQKql2IH7sRdCwNR/VFTJygA0Dm0w9CFEYnfC9waRkSTHADB5GsKAdBVVZOF1d72JkQKGaoFLB8/IhcHYpap0OAI7esAwBiw/i8cfkemfkqKSRwl2wDhywHAH8Gj5NnxdO5MgOpY0uRSeceRRNFQLjJThDxhQXxZDn95aq6P2Cxog5ysvR1ts4zB5OBOjB7lmzTwjlfS2JtcUWoL6fS6pbrhmQZML9RBNfICAYQyYeXR79siYgO0k4EoFTVMLJQU7lj7TYrveLJKqlJyAEbtoKAOWD+L8GzCg51n0ACnqPQdNv7kCuYcE/CAXaiWF09fkjDjIhGuBkS/Xl8wW6JXZSRKQ/ZMdg0YLiI8ZM1lbFIMkWPUYMNwuRgroeWggW0wDttFIATEKGeEixIAdLgEz9zFKwE4MGOlyUe0oATEXmq9rA44UsCMDtnsaJEuhATN9B+zIgO0eBsney+gAOzFgputl7aMDHI4BRwiYZC1X8dl3ptsWOELAzgzY/c5HBtiBASM9GHBkgGEnARL1YsCRAXZiwGoPBhwVIOZCdZN0vl4MOCrATgy40osBRwQ4PAOOCHBoLXBEgEM04GgAh2jAkQBiLsNaFu7l69GAIwFk3h3FD7BHA44CEOPhVKHG3oYP2IkB13o14AgAMRcJ3wJPe97r8AGH2gJHAIjxUA04fEDpVXgDLvRuwBFYcLgGHDpgJwZcO+7DLSKHDIjxi9AGXOmHAYcOOGwDDh0wfAvsjwGHDNiJARf6YsBhAw67BQ4Y8P8Ar9iJfEBkrJAAAAAASUVORK5CYII=' }}
                    style={{
                        height: length.interpolate({
                            inputRange: [0, 1],
                            outputRange: [HEIGHT(410), HEIGHT(200)]
                        }),
                        width: '100%'
                    }} />
            </Animated.View>
            <Animated.View
                style={{
                    paddingHorizontal: 40, marginTop: HEIGHT(40),
                    width: '100%',
                    height: length.interpolate({
                        inputRange: [0, 1],
                        outputRange: [HEIGHT(410), HEIGHT(600)]
                    })
                }}
            >
                <View style={{ height: HEIGHT(80) }}>
                    <Text>USERNAME</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder='enter username'
                        style={{ borderBottomWidth: 1 }}
                    />
                </View>
                <View style={{ height: HEIGHT(80), marginVertical: 10 }}>
                    <Text>PASSWORD</Text>
                    <TextInput
                        value={pass}
                        onChangeText={text => setPass(text)}
                        placeholder='enter username'
                        style={{ borderBottomWidth: 1 }}
                    />
                </View>
                <View>
                    <Button title='SIGN IN' color={'#9250b3'} onPress={() => signIn()} />
                </View>
            </Animated.View>
        </View>
    )
}