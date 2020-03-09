package com.zhwan.chatbotserv.viewmodel

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import com.google.gson.Gson
import com.zhwan.chatbotserv.model.Main
import com.zhwan.chatbotserv.network.BASE_URL
import com.zhwan.chatbotserv.network.NetService
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.Disposable
import io.reactivex.schedulers.Schedulers
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory

class MainViewModel () : ViewModel() {

    private lateinit var subscription: Disposable

    lateinit var main: ObservableField<Main>

    var text = ObservableField("old data")

    private fun getMain() {

        val retrofit: Retrofit = Retrofit.Builder().baseUrl(BASE_URL)
            .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val netServ = retrofit.create(NetService::class.java)

        subscription = netServ.getMain("1", "")
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .doOnSubscribe {

            }
            .doOnTerminate {

            }

            .subscribe({

                main.set(it)

            },

                {

                })
    }

}